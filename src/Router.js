import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddMovie from './AddMovie';
import App from "./App";
import Product from "./Product";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/product" component={Product} />
      <Route path="/addmovie" component={AddMovie} />

    </Switch>
  </BrowserRouter>
);

export default Router;



