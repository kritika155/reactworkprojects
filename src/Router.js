import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import AddMovie from './AddMovie';
import App1 from "./App1";
import Product from "./Product";
import Edit from './Edit';
import Search from './Search';

const Router = () => ( <
    BrowserRouter >
    <
    Switch >
    <
    Route path = "/"
    component = { App1 }
    exact / >
    <
    Route path = "/product"
    component = { Product }
    /> <
    Route path = "/addmovie"
    component = { AddMovie }
    /> <
    Route path = "/editmovie/:id"
    component = { Edit }
    /> <
    Route path = "/search"
    component = { Search }
    />

    <
    /Switch> < /
    BrowserRouter >
);

export default Router;