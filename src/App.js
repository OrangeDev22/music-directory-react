import React, { useEffect, useState } from "react";
import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/ladingPage";
import NavComponent from "./components/NavComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { auth } from "./firebase";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./components/Loading";
import SignUpComponent from "./pages/signUpPage";
import LoginPage from "./pages/loginPage";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    setLoading(true);
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch({ type: "SET_USER", payload: { user: authUser } });
      } else {
        dispatch({ type: "LOG_OUT", payload: { user: null } });
      }
      setLoading(false);
    });
    return () => {
      unsubscribe();
    };
  }, [user]);

  if (loading) {
    return <Loading />;
  }

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
          <Route path="/signin">
            <LoginPage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
