import React from "react";
import { Form, FormControl, Container, Button } from "react-bootstrap";

function SignUpComponent() {
  return (
    <>
      <h3 className="text-center mt-4">Create your account here</h3>
      <div className="h-100">
        <Form className="col-lg-6 offset-lg-3 mt-3 ">
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <FormControl placeholder="Email" />
          </Form.Group>
          <Form.Group>
            <Form.Label>User name</Form.Label>
            <FormControl placeHolder="User name" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <FormControl placeHolder="Password" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Repeat password</Form.Label>
            <FormControl placeHolder="Repeat password" />
          </Form.Group>
        </Form>
      </div>
    </>
  );
}

export default SignUpComponent;
