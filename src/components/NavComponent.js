import React from "react";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function NavComponent() {
  const history = useHistory();
  const user = useSelector((state) => state.user);

  const loggedOutButtons = () => {
    return (
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
    );
  };

  const loggedInButtons = () => {
    return (
      <div>
        <Button
          className="mr-1"
          variant="outline-primary"
          size="sm"
          onClick={() => auth.signOut()}
        >
          Log out
        </Button>
      </div>
    );
  };

  return (
    <Navbar bg="dark" variant="dark" className="d-flex">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Form inline className="flex-grow-1 ml-5 mr-5">
        <FormControl type="text" placeholder="Search" className=" w-100" />
      </Form>
      {user ? loggedInButtons() : loggedOutButtons()}
    </Navbar>
  );
}

export default NavComponent;
