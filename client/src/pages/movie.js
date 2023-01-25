import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import './movie.css';
import {Header} from "../components/header/header";
import axios from "axios";
const Movie = () => {
    axios.default.withCredentials = true;

    return (
        <div className="movie">
            <Header/>
        </div>
    );
};

export default Movie;