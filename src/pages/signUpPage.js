import React, { useRef, useState } from "react";
import { Form, FormControl, Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { auth } from "../firebase";

function SignUpComponent() {
  const history = useHistory();
  const [showMessage, setShowMessage] = useState(false);
  const [message, setMessage] = useState("");
  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordRepeatRef = useRef(null);

  const signUp = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const passwordRepeat = passwordRepeatRef.current.value;
    if (password === passwordRepeat && userName) {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(() => {
          const user = auth.currentUser;
          setMessage("");
          setShowMessage(false);
          user
            .updateProfile({
              displayName: userName,
            })
            .then(() => {
              history.push("/");
            });
        })
        .catch((error) => {
          setMessage(error.message);
          setShowMessage(true);
        });
    } else {
      setShowMessage(true);
      setMessage(
        userName === "" ? "Write a user name" : "Your password is not the same!"
      );
    }
  };

  return (
    <>
      <h3 className="text-center mt-4">Create your account here</h3>
      <div className="h-100">
        <Form
          className="col-lg-6 offset-lg-3 mt-3 d-flex flex-column "
          onSubmit={(e) => signUp(e)}
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
            <Form.Label>User name</Form.Label>
            <FormControl
              type="text"
              placeholder="User name"
              ref={userNameRef}
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
          <Form.Group>
            <Form.Label>Repeat password</Form.Label>
            <FormControl
              type="password"
              placeholder="Repeat password"
              ref={passwordRepeatRef}
              isInvalid={showMessage}
            />
          </Form.Group>

          <Button className="mt-2" type="submit">
            Create Account
          </Button>
        </Form>
      </div>
    </>
  );
}

export default SignUpComponent;
