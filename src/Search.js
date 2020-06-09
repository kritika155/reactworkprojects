import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0,
            searchQuery: '',
            data: []
        };
        this.handleSearchClick = this.handleSearchClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.delete = this.delete.bind(this);

    }
    componentDidMount() {
        // const url = `https://api.themoviedb.org/3/search/movie?api_key=24886132d1c22ac49c5c87d4c9d661f0&language=en-US&query=${query}&page=1&include_adult=false`;
        const u = 'http://localhost:3000/api/movies';
        fetch("http://localhost:3000/api/movies").then(response => response.json()).then((data) => {
            console.log(data);
            this.setState({
                data: data
            }, () => console.log(data))
        }).catch(err => console.log(err));
    }
    delete(id) {
        //  const url="http://localhost:3000/api/movies";
        fetch('http://localhost:3000/api/movies/' + id, {
            method: 'DELETE'
        }).then(response => { return response.json() }).then(data => console.log(data)).catch(err => console.log(err));
    }
    handleSearchClick(data) {
        console.log(data);
        let currentState = this.state;
        currentState.counter++;
        this.setState(currentState);
    }
    handleChange(data) {
        console.log(data);
        let currentState = this.state;
        currentState.searchQuery = data;
        this.setState(currentState);
    }
    render() {
        let listOfMoviesDisplayed = '';
        if (this.state.searchQuery == '') {
            listOfMoviesDisplayed = this.state.data.length > 0 && this.state.data.map((movie, index) => {
                return ( <
                    div key = { index }
                    className = "box" >

                    <
                    Container >
                    <
                    Row >
                    <
                    Col sm = { 6 } >
                    <
                    div className = "boxe" > < img src = { movie.image_url }
                    alt = { movie.name }
                    className = "movie" / > < /div> < /
                    Col > <
                    Col sm = { 6 } > < h1 > Movie Name: { movie.name } < /h1>

                    <
                    p > Production House: { movie.production_house } < /p> <
                    p > Language: { movie.language } < /p> <
                    p > Year: { movie.year } < /p> <
                    p > Rating: { movie.rating } < /p> <
                    p > Type: { movie.type } < /p> < /
                    Col > <
                    /Row> < /
                    Container > <
                    /div>
                );
            })
        } else {
            let filterMovies = this.state.data.filter((movie, index) => {
                return movie.name.toLowerCase().includes(this.state.searchQuery.toLowerCase())
            });
            listOfMoviesDisplayed = filterMovies.map((movie, index) => {
                return ( <
                    div key = { index }
                    className = "box" >

                    <
                    Container >
                    <
                    Row >
                    <
                    Col sm = { 6 } >
                    <
                    div className = "boxe" > < img src = { movie.image_url }
                    alt = { movie.name }
                    className = "movie" / > < /div> < /
                    Col > <
                    Col sm = { 6 } > < h1 > Movie Name: { movie.name } < /h1>

                    <
                    p > Production House: { movie.production_house } < /p> <
                    p > Language: { movie.language } < /p> <
                    p > Year: { movie.year } < /p> <
                    p > Rating: { movie.rating } < /p> <
                    p > Type: { movie.type } < /p> < /
                    Col > <
                    /Row> < /
                    Container > <
                    /div>
                );
            })
        }
        return ( <
            div className = "container" >
            <
            input type = "text"
            id = "usr"
            placeholder = "search by movie name(A-Z or a-z)"
            onChange = {
                (e) => { this.handleChange(e.target.value) }
            } > < /input> <
            button type = "button"
            onClick = {
                () => { this.handleSearchClick("Hey I am clicked") }
            } > Search < /button>

            { listOfMoviesDisplayed } <
            br / >

            <
            /div>
        );
    }
}