import React from "react";
import { Form, FormControl, Container, Button } from "react-bootstrap";

function SignUpComponent() {
  return (
    <Container className="h-100">
      <Form className="col-lg-6 offset-lg-3 pt-5 ">
        <Form.Group>
          <Form.Label>Email</Form.Label>
          <FormControl />
        </Form.Group>
        <Form.Group>
          <Form.Label>User name</Form.Label>
          <FormControl />
        </Form.Group>
        <Form.Group>
          <Form.Label>Password</Form.Label>
          <FormControl />
        </Form.Group>
        <Form.Group>
          <Form.Label>Repeat password</Form.Label>
          <FormControl />
        </Form.Group>
      </Form>
    </Container>
  );
}

export default SignUpComponent;
