import React, {useEffect, useState} from 'react';
import './home.css';
import {Header} from "../components/header/header";
import axios from "axios";
import {Banner} from "../components/banner/banner";
import {Movies} from "../components/movies/movies";
const Home = () => {
    axios.default.withCredentials = true;

    return (
        <div className="home">
            <Header/>
            <Banner/>
            <Movies/>
        </div>
    );
};

export default Home;