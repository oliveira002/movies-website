import React from "react";
import {useContext, useEffect, useState} from "react";
import './review.css';
import {faSearch, faUser, faStar} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

export const Review = (props) => {
    const imageUrl = props.review.author_details.avatar_path && props.review.author_details.avatar_path.slice(1);
    const rating = props.review.author_details.rating ? props.review.author_details.rating : '?';
    return(
        <div className="box mb-4">
            <div className="d-flex">
                <img src={imageUrl}/>
                <div className="ms-3 mt-3">
                    <div className="d-flex">
                        <span className="fw-bold h5">A review written by {props.review.author}</span>
                        <div className="d-flex align-items-center authorRate ">
                            <span className="fw-bold ms-2 h5"> {rating}</span>
                            <FontAwesomeIcon className="ms-1 mb-2" icon={faStar}/>
                        </div>
                    </div>
                    <p className="fw-light"> Written on {props.review.created_at.slice(0,10)}</p>
                    <span className="max-lines mt-1">{props.review.content}</span>
                </div>
            </div>
        </div>
    )
}