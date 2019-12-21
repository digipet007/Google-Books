import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Books from "./pages/Books";
import Search from "./pages/Search";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Router>
        <Switch>
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Books} />
          {/* <Route exact path="*" component={Search} /> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
