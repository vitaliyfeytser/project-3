import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSection from "./components/BookSection";
import FavSection from "./components/FavSection";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={BookSection} />
          <Route exact path="/favorite" component={FavSection} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
