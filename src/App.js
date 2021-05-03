import "./App.css";
import Navbar from "./components/Nav-bar/NavBar";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login/Login";
import SignUp from "./components/Signup/SignUp";

function App() {
  return (
    <div className="App bg-appColor">
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Login />} />
        <Route path="/signup" render={(props) => <SignUp />} />
      </Switch>
    </div>
  );
}

export default App;
