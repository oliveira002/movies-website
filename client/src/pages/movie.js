import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import './movie.css';
import {Header} from "../components/header/header";
import {MovieBg} from "../components/moviebg/moviebg";
import axios from "axios";
import { Cast } from '../components/cast/cast';
import { CastList } from '../components/cast/castList';
const Movie = () => {
    const {id} = useParams();
    const [filme,setFilme] = useState([]);
    const [cast,setCast] = useState([]);

    const getMovie = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setFilme(data);
    }

    const getCast = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setCast(data.cast);
        console.log(data.cast);
    }

    useEffect(() => {
        const movieURL = `https://api.themoviedb.org/3/movie/${id}?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US`;
        getMovie(movieURL);
        const castURL = `https://api.themoviedb.org/3/movie/${id}/credits?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US`;
        getCast(castURL);

    },[])

    return (
        <div>
            <Header/>
            <MovieBg {...filme}/>
            <CastList cast = {cast}/>
        </div>
    );
};

export default Movie;