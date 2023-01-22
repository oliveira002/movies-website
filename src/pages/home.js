import React, {useEffect, useState} from 'react';
import './home.css';
import {Header} from "../components/header/header";
import axios from "axios";
import {Banner} from "../components/banner/banner";
const Home = () => {
    return (
        <div className="home">
            <Header/>
            <Banner/>
        </div>
    );
};

export default Home;