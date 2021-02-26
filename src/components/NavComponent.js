import React from "react";
import { Navbar, Form, FormControl, Button, div } from "react-bootstrap";

function NavComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Form inline className="ml-auto mr-auto">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      </Form>
      <div>
        <Button variant="outline-primary" className="mr-3" size="sm">
          Sign Up
        </Button>
        <Button variant="outline-primary" className="mr-3" size="sm">
          Sign In
        </Button>
      </div>
    </Navbar>
  );
}

export default NavComponent;
