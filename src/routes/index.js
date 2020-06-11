import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SingIn from "../pages/SignIn";
import AdminRoutes from "./privateRoutes/routes-list";

import PrivateRoute from "./privateRoutes/private-routes";

const Routes = ({ component: Component, ...rest }) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/login" component={SingIn} exact />
        {AdminRoutes.map((route, key) => {
          return (
            <PrivateRoute
              key={key}
              path={route.path}
              component={route.component}
              exact={route.exact || false}
            />
          );
        })}
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
