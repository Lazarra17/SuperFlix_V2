import React from "react";
import { Route } from "react-router-dom";

import MainLayout from "../../pages/_layouts/main";

const Routes = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <MainLayout>
          <Component {...props} />
        </MainLayout>
      )}
    />
  );
};

export default Routes;
