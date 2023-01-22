import React from "react";
import './header.css'
import {faSearch, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const Header = () => {
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
                <div className = "d-flex">
                    <ul className = "links2">
                        <li>
                            <button className="login">
                                <FontAwesomeIcon className="me-2 lupa" icon={faUser}/>
                            Login
                            </button>
                        </li>
                        <li> <button className="register fw-bold">Get Started</button></li>
                    </ul>
                </div>
            </header>
        </div>
    )
}