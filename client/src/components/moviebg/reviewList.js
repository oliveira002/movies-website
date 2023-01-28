import React from "react";
import {useContext, useEffect, useState} from "react";
import './review.css';
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import { Review } from "./review";

export const ReviewList = (props) => {
    return(
        <div className="content mt-4">
            <span className="h4 fw-bold uptitle">Reviews</span>
            <div className="mt-4">
                {props.list.map((rev,index) => {
                    return <Review review = {rev}/>
                })}
            </div>
        </div>

    )
}