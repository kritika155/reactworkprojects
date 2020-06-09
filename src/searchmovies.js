import React, { useState } from 'react';
import './App.css';

export default function SearchMovies() {
    const [query, setQuery] = useState('');
    const [movies, setMovies] = useState([]);
    const searchMovies = async(e) => {


        e.preventDefault();
        console.log("Submitting");
        // const query = "Jurassic Park";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=24886132d1c22ac49c5c87d4c9d661f0&language=en-US&query=${query}&page=1&include_adult=false`;


        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data.results);
            setMovies(data.results);
        } catch (err) {
            console.log(err);
        }



    }
    return ( < >
        <
        form className = "form" >
        <
        label className = "label"
        htmlFor = "query" > Movie Name: < /label>  <
        input className = "input"
        type = "text"
        name = "query"
        placeholder = "i.e. Jurassic park"
        value = { query }
        onChange = {
            (e) => setQuery(e.target.value)
        }
        / > <
        button className = "button"
        type = "submit" > Search < /button>  < /
        form >
        <
        div className = "card-list" > {
            movies.map(movie => ( < div className = "card" >
                <
                img className = "card-image"
                src = { movie.poster_path }
                / > < /
                div > ))
        } < /
        div > <
        />
    )
}