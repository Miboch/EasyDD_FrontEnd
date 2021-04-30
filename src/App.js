import "./App.css";
import Navbar from "./components/Nav-bar/NavBar";
import { Route, Link, Switch } from "react-router-dom";
import Login from "./components/Login/Login";

function App() {
  return (
    <div className="App bg-appColor">
      <Navbar />
      <Switch>
        <Route path="/login" render={(props) => <Login />} />
      </Switch>
    </div>
  );
}

export default App;
