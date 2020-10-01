import React from "react";
import { HashRouter, Switch, Route } from "react-router-dom";
import Main from "./main/Main";
import TableComponent from "./Table/TableComponent";
import App from "./App";
import Grid from "./Grid/Grid";

const Router = (props) => {
  return (
    <HashRouter>
      <Route exact path="/" component={App} />
      <Route exact path="/table" component={TableComponent} />
      <Route exact path="/grid" component={Grid} />
    </HashRouter>
  );
};

export default Router;
