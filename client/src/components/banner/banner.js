import React, {useEffect, useState} from 'react';
import './banner.css'
import {faArrowRight, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Banner = (props) => {
    return(
        <div className="banner mt-4">
            <div className="bannerText">
                <span className="title fw-bold h2">{props.title}</span>
                <span className="subtitle fw-bold h6">{props.desc}</span>
                <div className="d-flex">
                    <button className="check"> Check it out! <FontAwesomeIcon icon={faArrowRight}/></button>
                    <div className="d-flex banRating">
                        <span className="fw-bold"> {props.rate}/10</span>
                        <FontAwesomeIcon icon={faStar}/>
                    </div>
                </div>
            </div>
            <img src={props.bg}/>
        </div>
    )
}