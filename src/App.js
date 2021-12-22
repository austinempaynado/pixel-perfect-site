import "./App.css";

//hooks
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { NavBar } from "./components/NavBar/navbar";
import { PostCard } from "./components/PostCard/postcard";
import { Homepage } from "./pages/Homepage/homepage";
//pages

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Homepage/>
          </Route>
          <Route path="/profile"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
