import './App.css';

//hooks
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { NavBar } from './components/NavBar/navbar';
//pages


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <NavBar/>
          <Route exact path="/"></Route>
          <Route path="/homepage"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
