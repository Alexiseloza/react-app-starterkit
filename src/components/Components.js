import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import Builder from "./Builder";

import Renderer from "./Renderer";
import SimpleForm from "./SimpleForm";
import { setUser } from "@formio/react";

const Components = () => {
  return (
    <Container className="pt-5">
      <Tab.Container id="left-tabs-example" defaultActiveKey={"renderer"}>
        <Row>
          <Col sm={2}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="builder">Form Builder</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="simple">Simple Form</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={10} style={{ borderLeft: "1px solid #eaeaea" }}>
            <Tab.Content>
              <Tab.Pane eventKey="renderer">
                <Renderer />
              </Tab.Pane>
              <Tab.Pane eventKey="builder" onSubmit={setUser}>
                <Builder />
              </Tab.Pane>
              <Tab.Pane eventKey="simple">
                <SimpleForm />
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
};

export default Components;
