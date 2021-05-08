import React, { useEffect } from "react";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
// pages
import ErrorPage from "../Pages/error";
import LoginPage from "../Pages/login";

//routes
import { PrivateRoute, PublicRoute } from "../routes";

//layout
import AdminLayout from "./Layout/AdminLayout";

import { useUserState, useUserDispatch } from "../context/UserContext";
import axios from "axios";

function App() {
  var { isAuthenticated } = useUserState();
  const dispatch = useUserDispatch()

  useEffect(() => {
    if (isAuthenticated) {
      console.log(isAuthenticated)
      axios
        .get("/v1/users/me")
        .then((res) => {
          console.log(res);
          dispatch({ type: "LOGIN_SUCCESS" })
          
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [isAuthenticated]);

  return (
    <HashRouter>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/main" />} />
        <Route exact path="/app" render={() => <Redirect to="/app/main" />} />
        <PrivateRoute
          path="/app"
          component={AdminLayout}
          isAuthenticated={isAuthenticated}
        />
        <PublicRoute
          path="/login"
          component={LoginPage}
          isAuthenticated={isAuthenticated}
        />
        <Route component={ErrorPage} />
      </Switch>
    </HashRouter>
  );
}

export default App;
