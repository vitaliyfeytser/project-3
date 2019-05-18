import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BookSection from "./components/BookSection";
import FavSection from "./components/FavSection";
import Nav from "./components/Nav";
import SignInSection from "./components/SignInSection";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>

          <Route exact path="/" component={SignInSection} />
          <Route exact path="/favorite" component={FavSection} />
          <Route exact path="/book" component={BookSection} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
