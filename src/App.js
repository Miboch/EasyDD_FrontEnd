import "./App.css";
import Navbar from "./components/Nav-bar/NavBar";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login/Login.tsx";
import SignUp from "./components/Signup/SignUp.tsx";
import SesssionRoom from "./components/SessionRoom/seshRoom";

function App() {
  return (
    <div className="App bg-appColor">
      <Navbar />
      <Switch>
        <Route exact path="/" render={(props) => <Login />} />
        <Route path="/signup" render={(props) => <SignUp />} />
        <Route path="/sesh" render={(props) => <SesssionRoom />} />
      </Switch>
    </div>
  );
}

export default App;
