import React, {useEffect, useState} from 'react';
import './banner.css'
import {faArrowRight, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Banner = () => {
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

    return(
        <div className="banner mt-5">
            <div className="bannerText">
                <span className="title fw-bold h2">{popular.original_title}</span>
                <span className="subtitle fw-bold h6">{popular.overview}</span>
                <div className="d-flex">
                    <button className="check"> Check it out! <FontAwesomeIcon icon={faArrowRight}/></button>
                    <div className="d-flex banRating">
                        <span className="fw-bold"> {popular.vote_average}/10</span>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
            </div>
            <img src={bannerUrl}/>
        </div>
    )
}