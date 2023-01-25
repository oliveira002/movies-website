import React, {useEffect, useState} from 'react';
import '../banner/banner.css'
import {faArrowRight, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MovieBg = ({backdrop_path, original_title, overview, release_date,genres,runtime}) => {
    const bannerUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`
    const data = release_date && release_date.slice(0,4);
    let hours = runtime && Math.floor(runtime / 60);
    let remainder = runtime && runtime  % 60;
    let minutesString = remainder < 10 ? "0" + remainder : remainder;
    return(
        <div className="d-flex flex-column">
            <div className="movieBanner mt-4">
                <div className="d-flex overText">
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
                </div>
                <img src={bannerUrl}/>
            </div>
        </div>
    )
}