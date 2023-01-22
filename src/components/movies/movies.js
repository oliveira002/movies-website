import React, {useEffect, useState} from 'react';
import './movies.css'
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MovieCard} from "./moviecard";

export const Movies = () => {
    const [upComing,setUpComing] = useState([])
    const [trending,setTrending] = useState([])

    const getUpComing = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setUpComing(data.results.slice(0,6));
    }

    const getTrending = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTrending(data.results.slice(0,5));
    }

    useEffect(() => {
        const upComingURL = "https://api.themoviedb.org/3/movie/upcoming?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US&page=1";
        getUpComing(upComingURL);
        const trending = "https://api.themoviedb.org/3/movie/popular?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US&page=1";
        getTrending(trending);

    },[])

    return(
        <div className="list">
            <span className="h4 fw-bold mt-3 mb-2 uptitle">Upcoming Movies</span>
            <ul className="upcoming">
                {upComing.map((movie,index) => {
                    return <MovieCard key = {index} {...movie}/>
                })}
            </ul>
        </div>
    )
}