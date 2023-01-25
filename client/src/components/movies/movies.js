import React, {useEffect, useState} from 'react';
import './movies.css'
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {MovieCard} from "./moviecard";

export const Movies = () => {
    const [upComing,setUpComing] = useState([])
    const [trending,setTrending] = useState([])
    const [upComingShows,setUpComingShows] = useState([])
    const [trendingShows,setTrendingShows] = useState([])

    const getUpComing = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setUpComing(data.results.slice(0,6));
    }

    const getTrending = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTrending(data.results.slice(0,6));
    }

    const getUpComingShows = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setUpComingShows(data.results.slice(0,6));
    }

    const getTrendingShows = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setTrendingShows(data.results.slice(0,6));
    }

    useEffect(() => {
        const upComingURL = "https://api.themoviedb.org/3/movie/top_rated?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US&page=1";
        getUpComing(upComingURL);
        const trending2 = "https://api.themoviedb.org/3/movie/popular?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US&page=1";
        getTrending(trending2);
        const upComingURLShows = "https://api.themoviedb.org/3/tv/top_rated?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US&page=1";
        getUpComingShows(upComingURLShows);
        const trendingShows2 = "https://api.themoviedb.org/3/tv/popular?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US&page=1";
        getTrendingShows(trendingShows2);

    },[])

    return(
        <div className="list">
            <span className="h4 fw-bold mt-4 uptitle">Top Rated Movies</span>
            <ul className="upcoming">
                {upComing.map((movie,index) => {
                    return <MovieCard key = {index} {...movie}/>
                })}
            </ul>
            <span className="h4 fw-bold mt-4 uptitle">Trending Movies</span>
            <ul className="upcoming">
                {trending.map((movie,index) => {
                    return <MovieCard key = {index} {...movie}/>
                })}
            </ul>
            <span className="h4 fw-bold mt-4 uptitle">Top Rated TV Shows</span>
            <ul className="upcoming">
                {upComingShows.map((movie,index) => {
                    return <MovieCard key = {index} {...movie}/>
                })}
            </ul>
            <span className="h4 fw-bold mt-4 uptitle">Trending TV Shows</span>
            <ul className="upcoming">
                {trendingShows.map((movie,index) => {
                    return <MovieCard key = {index} {...movie}/>
                })}
            </ul>
        </div>
    )
}