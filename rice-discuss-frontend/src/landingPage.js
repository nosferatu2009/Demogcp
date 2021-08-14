import React, { useState , useEffect} from 'react';
import './App.css';
import {
    BrowserRouter as Router,
    Route,
    Redirect,
    Link
} from "react-router-dom";
import Protected from './components/Protected.js';
import Login from './components/Login.js';
// import './components/button.css';
// import landingP from './components/assets/login.svg';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useEffect } from 'react';


function LandingPage(props) {

    const [s, setS] = useState("login");
    const [authStarted, setAuthStarted] = useState(false);

    const cas_auth_url = "https://idp.rice.edu/idp/profile/cas/login";
    const service_url = "http://localhost:3000/login";
    const url = cas_auth_url + "?service=" + service_url;

    function login(e) {
        e.preventDefault();

        if (authStarted) {
            const urlParams = new URLSearchParams(window.location.search);
            const ticket = urlParams.get('ticket');

            console.log("Reached before ticket == true");

            if (ticket) {
                const backend_url = "http://localhost:3001/login";

                const query = {
                    ticket: ticket
                };
                console.log("Inside ticket == true");
                fetch(backend_url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(query),
                })
                    .then(res => {
                        // put it in the browser cache
                        console.log("No setting state");
                        res.success ? setS("protected") : setS("login");
                    });
            }
        }
    }

    return (
        <Router>
            <Link to={url}>
                <button onClick={(e) => { window.open(url, "_self"); login(e);}}>
                    Sign In
                    </button>
            </Link>
            <Redirect to={`/${s}`} />
        </Router>
    );
}
export default LandingPage;
