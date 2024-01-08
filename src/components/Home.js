import { Container } from "react-bootstrap";
import { Form } from "@formio/react";
import { atomOneLight, CopyBlock } from "react-code-blocks";
import logo from "../LogoSfondoScuro.svg";
import Builder from "./Builder";

const Home = () => {
  const onSubmitHandler = (submission) => {
    console.log(submission);
  };

  return (
    <>
      <Container className="pt-5">
        <div className="bg-light rounded-3 p-5 mb-4">
          {/* <h2>
            JavaScript Powered Forms for
            
            
            by
            <a
              href="https://form.io"
              target="_blank"
              rel="noreferrer"
              style={{ padding: "0 0.4rem" }}
            >
              <img
                alt="Form.io logo"
                src={logo}
                style={{ height: "3rem", display: "inline" }}
              />
            </a>
          </h2>
          <p>
            This library provides JavaScript powered forms for{" "}
            <a target="_blank" href="https://reactjs.org" rel="noreferrer">
              React
            </a>
            . This allows you to render the JSON schema forms produced by
            Form.io and render those within your application using React, as
            well as provides an interface SDK to communicate to the Form.io
            API's. The benefits of this library include.
          </p>
          <ul>
            <li>
              Renders a JSON schema as a webform and hooks up that form to the
              Form.io APIs
            </li>
            <li>
              Nested components, layouts, Date/Time, Select, Input Masks, and
              many more included features
            </li>
            <li>Full JavaScript API SDK library on top of Form.io</li>
          </ul>
        </div>
        <div className="card mb-4">
          <div className="card-body">
            <h5 className="card-title">Code</h5>
            <CopyBlock
              text={`<Form src={'https://examples.form.io/example'} onSubmit={onSubmitHandler} />`}
              theme={atomOneLight}
              language={"jsx"}
              codeBlock={true}
              showLineNumbers={false}
            />
          </div>
        </div>
        <div className="card p-3">
          <h5 className="card-title">Result</h5>
          <div className="card-body bg-light rounded-3">
            <Form
              src={"https://examples.form.io/example"}
              onSubmit={onSubmitHandler}
            />
          </div> */}
          <Builder />
        </div>
      </Container>
    </>
  );
};

export default Home;
