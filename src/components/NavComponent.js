import React from "react";
import { Link, useHistory } from "react-router-dom";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function NavComponent() {
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark" className="d-flex">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Form inline className="flex-grow-1 ml-5 mr-5">
        <FormControl type="text" placeholder="Search" className=" w-100" />
      </Form>
      <div>
        <Button
          variant="outline-primary"
          className="mr-3"
          size="sm"
          onClick={() => history.push("/signup")}
        >
          Sign Up
        </Button>
        <Button variant="outline-primary" className="mr-1" size="sm">
          Sign In
        </Button>
      </div>
    </Navbar>
  );
}

export default NavComponent;
