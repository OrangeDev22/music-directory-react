import "./css/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LandingPage from "./pages/ladingPage";
import NavComponent from "./components/NavComponent";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { db, auth } from "./firebase";
import SignUpComponent from "./pages/signUpPage";

function App() {
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
