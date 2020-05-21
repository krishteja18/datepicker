import React, { Fragment } from "react";
import { ConnectedRouter } from "react-router-redux";
import { Switch, Route } from "react-router-dom";
import BasicLayout from "./layouts/BasicLayout";

import Datepicker from "./pages/Masters/Datepicker"



function RouterConfig({ history }) {
  return (
    <Fragment>
      <ConnectedRouter history={history}>
        <Switch>
          <Route path="/" component={Datepicker} />

          
        </Switch>
      </ConnectedRouter>
    </Fragment>
  );
}

export default RouterConfig;
