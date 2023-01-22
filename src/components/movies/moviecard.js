import React, {useEffect, useState} from 'react';
import './movies.css'
import {faSearch, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MovieCard = ({poster_path,title,release_date,vote_average}) => {
    const bannerUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
    return(
        <li className="movieCard" >
            <img src={bannerUrl}/>
            <div className="space ms-1">
                <span className="fw-bold h5 mt-2"> Title</span>
                <a href="#" className="fw-light h5">{title}</a>
                <div className="d-flex showRating">
                    <span className="fw-bold h5"> Rating</span>
                    <div className="d-flex rat">
                        <span className="fw h5 me-1">{vote_average}</span>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
            </div>
        </li>
    )
}