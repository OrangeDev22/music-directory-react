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
import axios from "axios";
import SearchPage from "./pages/searchPage";
import ProfilePage from "./pages/profilePage";
import "react-h5-audio-player/lib/styles.css";

const CLIENT_ID = process.env.REACT_APP_SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_SPOTIFY_CLIENT_SECRET;

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);

  useEffect(() => {
    axios("https://accounts.spotify.com/api/token", {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: "Basic " + btoa(CLIENT_ID + ":" + CLIENT_SECRET),
      },
      data: "grant_type=client_credentials",
      method: "POST",
    }).then((tokenResponse) => {
      // console.log(tokenResponse);
      dispatch({
        type: "SET_TOKEN",
        payload: { access_token: tokenResponse.data.access_token },
      });
    });
  }, [CLIENT_ID, CLIENT_SECRET]);

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
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route>
            <ProfilePage path="/profile" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
