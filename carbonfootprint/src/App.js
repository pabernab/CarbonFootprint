import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import "bootstrap/dist/css/bootstrap.css";
import "./style.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import About from "./components/About";

// Does the user's browser support the HTML5 history API?
// If the user's browser doesn't support the HTML5 history API then we
// will force full page refreshes on each page change.
const supportsHistory = "pushState" in window.history;

function App() {
  return (
    <BrowserRouter forceRefresh={!supportsHistory}>
      <div>
        <Nav />
        <main>
          <Route
            render={({ location }) => {
              const { pathname } = location;
              return (
                <TransitionGroup>
                  <CSSTransition
                    key={pathname}
                    classNames="page"
                    timeout={{
                      enter: 1000,
                      exit: 1000,
                    }}
                  >
                    <Route
                      location={location}
                      render={() => (
                        <Switch>
                          <Route exact path="/" component={Home} />
                          <Route path="/about" component={About} />
                        </Switch>
                      )}
                    />
                  </CSSTransition>
                </TransitionGroup>
              );
            }}
          />
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;
