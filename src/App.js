import "./App.css";

//hooks
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

//pages
import { NavBar } from "./components/NavBar/navbar";
import { Homepage } from "./pages/Homepage/homepage";
import { LoginPage } from "./pages/Loginpage/loginpage";
import { ProfilePage } from "./pages/Profilepage/profilepage";
import { Sidebar } from "./components/Sidebar/sidebar";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <LoginPage />
          </Route>
          <Route path="/home">
            <div id="vp">
              <NavBar />
              <Homepage />
              <Sidebar />
            </div>
          </Route>
          <Route path="/profile">
            <NavBar />
            <ProfilePage />
            <Sidebar />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
