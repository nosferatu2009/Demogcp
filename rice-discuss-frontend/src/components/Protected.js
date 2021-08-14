import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link
} from "react-router-dom";
// import './components/button.css';
// import landingP from './components/assets/login.svg';
// import Container from 'react-bootstrap/Container';
// import Col from 'react-bootstrap/Col';
// import Row from 'react-bootstrap/Row';
// import { useEffect } from 'react';


function Protected(props) {

    return (
        <h1>This is the protected Page</h1>
    );
}
export default Protected;
