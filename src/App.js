import React from 'react'
import Chapter1 from './containers/Chapter1/Chapter1'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/">
            <Chapter1 />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
