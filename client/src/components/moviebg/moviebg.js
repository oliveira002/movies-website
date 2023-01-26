import React, {useEffect, useState} from 'react';
import '../banner/banner.css'
import {faArrowRight, faStar, faPlay} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MovieBg = ({backdrop_path, original_title, overview, release_date,genres,runtime,tagline,poster_path,vote_average}) => {
    const bannerUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`
    const posterUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
    const data = release_date && release_date.slice(0,4);
    let hours = runtime && Math.floor(runtime / 60);
    let remainder = runtime && runtime  % 60;
    let minutesString = remainder < 10 ? "0" + remainder : remainder;
    let rating = vote_average && vote_average.toFixed(1);
    return(
        <div className="d-flex flex-column">
            <div className="movieBanner mt-4">
                <div className="">
                    <div className="d-flex flex-column posterpic">
                        <div className="ratingcircle d-flex">
                            <span className="posterRate fw-bold">{rating}</span>
                        </div>
                        <img className="" src={posterUrl} width="250" height="380"/>
                    </div>
                    <div className="d-flex flex-column overText">
                        <div className="d-flex titulo">
                            <span className="title fw-bold h5">{original_title} ({data})</span>
                        </div>
                        <ul className="sec">
                            <li className="d-flex">
                                <span className="fw-bold undertitle">Release Date: </span>
                                <span className="ms-1">{release_date}</span>
                            </li>
                            <li className="d-flex">
                                <span className="fw-bold undertitle"> Genres: </span>
                                <div className="d-flex ms-1">
                                    {genres &&
                                        genres.map((genre,index) => {
                                        return <span key = {index} className="ms-1"> {genre.name}{index !== genres.length - 1 && ','}</span>
                                    })
                                    }
                                </div>
                            </li>
                            <li className="d-flex">
                                <span className="fw-bold undertitle"> Duration:</span>
                                <span className="ms-1">{hours}h {minutesString}m</span>
                            </li>
                        </ul>
                        <span className="fw-bold tag"> ~ {tagline}</span>
                        <div className="overview d-flex flex-column">
                            <span className="fw-bold undertitle">Overview:</span>
                            <span>{overview}</span>
                        </div>
                        <div className="d-flex mt-2">
                            <button className="check2 fw-bold">  <FontAwesomeIcon className="ms-1" icon={faPlay}/> Trailer </button>
                            <button className="favbutton ms-2 fw-bold"> Add to favourites<FontAwesomeIcon className="ms-1" icon={faStar}/></button>
                        </div>
                    </div>
                </div>
                <img className="bgg" src={bannerUrl}/>
            </div>
        </div>
    )
}