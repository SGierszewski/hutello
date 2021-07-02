import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";
import Login from "./pages/Login/Login";
import Profile from "./pages/Profile/Profile";
import Register from "./pages/Register/Register";
import Search from "./pages/Search/Search";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: "/", Component: Login, exact: true },
  { path: "/register", Component: Register },
  { path: "/profile", Component: Profile },
  { path: "/search", Component: Search },
];

function App(): JSX.Element {
  return (
    <div className={styles.App}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
        <Navbar className={styles.navbar} />
      </BrowserRouter>
    </div>
  );
}

export default App;
