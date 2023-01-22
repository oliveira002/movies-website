import React, {useEffect, useState} from 'react';
import './movies.css'
import {faSearch, faStar, faPlus} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const MovieCard = ({poster_path,title,release_date,vote_average,first_air_date,name}) => {
    const bannerUrl = `https://www.themoviedb.org/t/p/w220_and_h330_face${poster_path}`
    return(
        <li className="movieCard" >
            <img src={bannerUrl}/>
            <div className="space mt-2">
                {name ?  (<a href="#" className="fw-bold h6 ms-2">{name}</a>) :
                    <a href="#" className="fw-bold h6 ms-2">{title}</a>
                }
                <div className="d-flex tudo">
                    <span className="subra fw-bold ms-2">Rating:</span>
                    <div className="d-flex rat ms-2">
                        <span className="sub fw-bold">{vote_average}</span>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                    <span className="subra fw-bold ms-2">Release:</span>
                    {release_date ?  (<span className="sub fw-bold ms-2">{release_date}</span>) :
                        <span className="sub fw-bold ms-2">{first_air_date}</span>
                    }
                    <button className="follow fw-bold mt-1"> Add to WatchList</button>
                </div>
            </div>
        </li>
    )
}