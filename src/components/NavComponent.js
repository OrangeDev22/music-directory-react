import React, { useRef } from "react";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";
import { Navbar, Form, FormControl, Button } from "react-bootstrap";
import { useSelector } from "react-redux";

function NavComponent() {
  const history = useHistory();
  const user = useSelector((state) => state.user);
  const searchRef = useRef(null);

  const searchHandler = (e) => {
    e.preventDefault();
    history.push(`/search?name=${searchRef.current.value}`);
  };

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
        <Button
          variant="outline-primary"
          className="mr-1"
          size="sm"
          onClick={() => history.push("/signin")}
        >
          Sign In
        </Button>
      </div>
    );
  };

  const loggedInButtons = () => {
    return (
      <div className="d-flex justify-content-center text-center">
        <Button
          className="mr-1"
          variant="outline-primary"
          size="sm"
          onClick={() => {
            auth.signOut();
            history.push("/");
          }}
        >
          Log out
        </Button>
      </div>
    );
  };

  return (
    <Navbar bg="dark" variant="dark" className="d-flex">
      <Navbar.Brand href="/">Navbar</Navbar.Brand>
      <Form
        inline
        className="flex-grow-1 ml-5 mr-5"
        onSubmit={(e) => searchHandler(e)}
      >
        <FormControl
          type="text"
          placeholder="Search"
          className=" w-100"
          ref={searchRef}
        />
      </Form>
      {user ? loggedInButtons() : loggedOutButtons()}
    </Navbar>
  );
}

export default NavComponent;
