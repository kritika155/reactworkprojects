import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddMovie from './AddMovie';
import App from "./App";
import Product from "./Product";
import Edit from './Edit';
const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route path="/product" component={Product} />
      <Route path="/addmovie" component={AddMovie} />
      <Route path="/editmovie/:id" component={Edit} />
    </Switch>
  </BrowserRouter>
);

export default Router;



