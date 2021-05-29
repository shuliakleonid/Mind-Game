import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            {/*<HomePage />*/}
          </Route>
          <Route path="/blog/:slug">
            {/*<BlogPost />*/}
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
