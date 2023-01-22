import React, {useEffect, useState} from 'react';
import './movies.css'
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MovieCard = ({poster_path,title,release_date}) => {
    const bannerUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
    return(
        <li className="movieCard">
            <img src={bannerUrl}/>
            <span className="fw-bold">{title}</span>
        </li>
    )
}