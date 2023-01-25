import React from "react";
import {useContext, useEffect, useState} from "react";
import './header.css'
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';
import BasicModal from "./login";
import UserContext from '../context/usercontext';
import Axios from "axios";


export const Header = () => {
    async function logout(e) {
        e.preventDefault();
        try {
            const response = await Axios.delete('http://localhost:3001/logout');
            window.location.reload();
        } catch (error) {
            console.log(error);
        }
    }
    const user = useContext(UserContext);
    return(
        <div className="fix2">
            <header>
                <a href="#" className="fw-bold h4 mb-0 ms-4 me-4 logo"> Movies </a>
                <nav className = "d-flex">
                    <ul className = "links">
                        <li> <a href= "" className="h6 reset">Home</a></li>
                        <li> <a href= "" className="h6 reset">Movies</a></li>
                        <li> <a href= "" className="h6 reset">TV Shows</a></li>
                    </ul>
                </nav>
                <div className="searchbar">
                    <input type="text" placeholder="Search"/>
                    <FontAwesomeIcon className="me-2 lupa" icon={faSearch}/>
                </div>
                {user ?
                    <div className="d-flex">
                        <ul className ="links2">
                            <li>
                                <button className="login"> Profile </button>
                            </li>
                            <li>
                                <form onSubmit={logout}>
                                    <button className="register fw-bold" type="submit"> Logout </button>
                                </form>
                            </li>
                        </ul>
                    </div>
                    :
                    <div className = "d-flex">
                        <ul className = "links2">
                            <li>
                                <BasicModal name='Login' class='login'/>
                            </li>
                            <li> <BasicModal name='Get Started' class='register'/></li>
                        </ul>
                    </div>
                }
            </header>
        </div>
    )
}