import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import './header.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";
import Axios from "axios";
import {useContext, useEffect, useState} from "react";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 8px 0px',
    borderRadius: '8px',
    p: 4,
};

export default function BasicModal(props) {
    Axios.defaults.withCredentials = true;
    const [error,setError] = useState("");
    const [errorL,setErrorL] = useState("");
    const [open, setOpen] = useState(false);
    const [userReg, setUserReg] = useState("");
    const [pwReg, setPwReg] = useState("");
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
        Axios.get("http://localhost:3001/login")
    },[])

    async function register(e) {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/register', { username: userReg, password: pwReg });
            window.location.reload();
        } catch (error) {
            if (error.response.status === 400) {
                setError(error.response.data.error);
            } else {
                // Handle other errors
                setError(error.response.data.error);
            }
        }
    }

    async function login(e) {
        e.preventDefault();
        try {
            const response = await Axios.post('http://localhost:3001/login', { username: userReg, password: pwReg  });
            window.location.reload();
        } catch (error) {
            if (error.response) {
                if (error.response.status === 401) {
                    setErrorL(error.response.data.error);
                } else {
                    // Handle other errors
                    setErrorL(error.response.data.error);
                }
            } else if (error.request) {
                console.log(error.request);
            } else {
                console.log('Error', error.message);
            }
        }
    }

    return (
        <div>
            <div>
                <button className={props.class} onClick={handleOpen}>
                    {props.name === 'Login' ?
                    <div className="d-flex align-items-center">
                        <FontAwesomeIcon className="me-2 lupa" icon={faUser}/>
                        <span className="fw-bold">{props.name}</span>
                    </div> :
                        <span className="fw-bold">{props.name}</span>
                    }
                </button>
                {props.name === 'Login' ?
                    <Modal className = "mypopup" open={open} onClose={handleClose}>
                        <Box sx={style}>
                            <form className="d-flex flex-column" onSubmit={login}>
                                <span className="h3 titlelogin"> Login </span>
                                <span className="h5 align-self-center mt-2"> {errorL}</span>
                                <input type="text" onChange={(e) => {setUserReg(e.target.value)}} placeholder="Username" name="username"/>
                                <input type="password" onChange={(e) => {setPwReg(e.target.value)}} placeholder="Password" name="password"/>
                                <span className="align-self-center mb-2"> Forgot your password? </span>
                                <button className="log" type="submit"> Login </button>
                            </form>
                        </Box>
                    </Modal>
                    :
                    <Modal className = "mypopup" open={open} onClose={handleClose}>
                        <Box sx={style}>
                            <div className="d-flex flex-column">
                                <span className="h3 titlelogin"> Register </span>
                                <span className="h5 align-self-center mt-2"> {error}</span>
                                <input type="text" onChange={(e) => {setUserReg(e.target.value)}} placeholder="Username" name="username"/>
                                <input type="password" onChange={(e) => {setPwReg(e.target.value)}} placeholder="Password" name="password"/>
                                <span className="align-self-center mb-2"> Already have an account? </span>
                                <button className="log" onClick={register}> Register </button>
                            </div>
                        </Box>
                    </Modal>
                }
            </div>
        </div>
    );
}
