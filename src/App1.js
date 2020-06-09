import React from 'react';
import ReactDOM from 'react-dom';
import SearchMovies from "./searchMovie";
import './styles.css';

export default class App1 extends React.Component {
    render() {
        return ( <
            div className = "container" >
            <
            h1 className = "title" > React Movie Search < /h1> <
            SearchMovies / >
            <
            /div>
        );
    }
}