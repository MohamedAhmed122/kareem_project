import React from "react";
import { Switch, Route } from "react-router-dom";
import CountDetail from "../Pages/CountDetailPage";
import Count from "../Pages/CountPage";
import Home from "../Pages/HomePage";
import Login from "../Pages/LoginPage";

export default function Navigation({}) {
  return (
    <Switch>
      <Route exact path="/" component={Count} />
      <Route exact path="/detail" component={CountDetail} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/home" component={Home} />
    </Switch>
  );
}
