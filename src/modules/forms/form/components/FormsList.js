import React, { useEffect, useState, useCallback } from 'react'
import { Link, useNavigate  } from 'react-router-dom'
import { Errors, FormGrid } from '@formio/react';
import { Loading } from '../../../../common';
import { useForms, indexForms } from '../formsContext';

const FormsList = () => {
  const navigate = useNavigate ();
  const { state: formsState, dispatch: dispatchFormsAction } = useForms();
  const [requestParams, setRequestParams] = useState({
    limit: 10,
    query: {type: 'form', tags: 'common'},
    select: '',
    sort: '',
  });

  const getForms = useCallback(
    (page, params) => {
      indexForms(
        dispatchFormsAction,
        requestParams,
        page,
        params,
      );
    },
    [requestParams, dispatchFormsAction],
  );

  useEffect(() => {
    getForms(1);
  }, [getForms]);

  const operations = [
    {
      action: 'view',
      buttonType: 'success rounded',
      icon: 'pencil',
      permissionsResolver() {
        return true;
      },
      title: 'Enter Data',
    },
    {
      action: 'submission',
      buttonType: 'outline-dark rounded  ml-2',
      icon: 'list-alt',
      permissionsResolver() {
        return true;
      },
      title: 'View Data',
    },
    {
      action: 'edit',
      buttonType: 'outline-dark rounded ml-2',
      icon: 'edit',
      permissionsResolver() {
        return true;
      },
      title: 'Edit Form',
    },
    {
      action: 'delete',
      buttonType: 'outline-dark rounded ml-2',
      icon: 'trash',
      permissionsResolver() {
        return true;
      },
    },
  ]

  const onAction = (form, action) => {
    switch(action) {
      case 'view':
        navigate(`/form/${form._id}`);
        break;
      case 'submission':
        navigate(`/form/${form._id}/submission`);
        break;
      case 'edit':
        navigate(`/form/${form._id}/edit`);
        break;
      case 'delete':
        navigate(`/form/${form._id}/delete`);
        break;
      default:
    }
  };

  const onPageSizeChanged = (pageSize) => {
    setRequestParams({ ...requestParams, limit: pageSize });
  };

  const { isActive } = formsState;

  if (isActive) {
    return (
      <Loading />
    );
  }

  return (
    <div>
      <h1>Forms</h1>
      <Errors errors={[formsState.error]} />
      <FormGrid
        forms={{ ...formsState, ...requestParams }}
        getForms={getForms}
        onAction={onAction}
        onPageSizeChanged={onPageSizeChanged}
        operations={operations}
      />
      <div className="d-flex justify-content-end mt-2">
        <Link className="btn btn-success rounded" to="/form/create"><i className="fa fa-plus"></i>&nbsp;Create Form</Link>
      </div>
    </div>
  );
};

export default FormsList;
