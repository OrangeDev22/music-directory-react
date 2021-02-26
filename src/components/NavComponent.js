import React from "react";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";

function NavComponent() {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Form inline className="ml-auto">
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
}

export default NavComponent;
