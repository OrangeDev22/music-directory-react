import React, { useRef, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

function LoginPage() {
  const history = useHistory();
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const [message, setMessage] = useState("");
  const [showMessage, setShowMessage] = useState(false);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then(() => {
        setShowMessage(false);
        history.push("/");
      })
      .catch((error) => {
        setShowMessage(true);
        setMessage(error.message);
      });
  };

  return (
    <>
      <h3 className="text-center mt-4">Login here</h3>
      <div className="h-100">
        <Form
          className="col-lg-6 offset-lg-3 mt-3 d-flex flex-column "
          onSubmit={(e) => signIn(e)}
        >
          <div style={{ height: "1em", marginBottom: "8px" }}>
            <Form.Label className="message_error ">{message}</Form.Label>
          </div>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <FormControl
              type="email"
              placeholder="Email"
              ref={emailRef}
              isInvalid={showMessage}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Password</Form.Label>
            <FormControl
              type="password"
              placeholder="Password"
              ref={passwordRef}
              isInvalid={showMessage}
            />
          </Form.Group>
          <Button className="mt-2" type="submit">
            Log in
          </Button>
        </Form>
      </div>
    </>
  );
}

export default LoginPage;
