import "./App.css";

//hooks
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/navbar";
import { Homepage } from "./pages/Homepage/homepage";
import { LoginPage } from "./pages/Loginpage/loginpage";
//pages

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home">
            <NavBar />
            <Homepage />
          </Route>
          <Route path="/profile">
            <NavBar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
