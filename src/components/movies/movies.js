import React, {useEffect, useState} from 'react';
import './movies.css'
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import axios from "axios";

export const Movies = () => {
    const [topRated,setTopRated] = useState([])

    useEffect(() => {
        axios.get("https://api.themoviedb.org/3/movie/top_rated?api_key=8e5744e35da67d3a15a61f0beb1c2a64&language=en-US&page=1").then(response => {
            console.log(response);
        }).catch(error => {
            console.log(error);
        })
    },[])
    return(
        <div className="all">

        </div>
    )
}