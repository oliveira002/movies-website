import React, {useEffect, useState} from 'react';
import './home.css';
import {Header} from "../components/header/header";
import axios from "axios";
import {Banner} from "../components/banner/banner";
import {Movies} from "../components/movies/movies";
const Home = () => {
    axios.default.withCredentials = true;

    const [popular,setPopular] = useState([])

    const getMostPopular = async(url) => {
        const res = await fetch(url);
        const data = await res.json();
        setPopular(data.results[0]);
    }

    useEffect(() => {
        const popularURL = "https://api.themoviedb.org/3/movie/popular?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US&page=1";
        getMostPopular(popularURL);
    },[])

    const bannerUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${popular.backdrop_path}`

    return (
        <div className="home">
            <Header/>
            <Banner bg = {bannerUrl} title={popular.original_title} desc = {popular.overview} rate = {popular.vote_average}/>
            <Movies/>
        </div>
    );
};

export default Home;