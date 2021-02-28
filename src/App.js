import React, { useEffect } from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/ladingPage";
import NavComponent from "./components/NavComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import SignUpComponent from "./pages/signUpPage";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        console.log("auth user", authUser);
        dispatch({ type: "LOGIN", payload: { user: authUser } });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  return (
    <div className="App">
      <Router>
        <NavComponent />
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route path="/signup">
            <SignUpComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
