import React from 'react';
import {Image, Container, Col, Row} from 'react-bootstrap/';
import './whitemenubar.css';
import './mbImgContainer.css';
import Mail from './assets/mail.jpg';
import Speech from './assets/speech.jpg';

function Menubar (){
    const divStyle={
        maxWidth: '35px',
        maxHeight: '50px',
    };
    return (
        <div className= 'whitemenubar'>
            
            <div className='.mbImgContainer'>
                <img src={Mail} style={divStyle}></img>
            </div>
            <p> </p>
            <div className='.mbImgContainer'>
                <img src={Speech} style={divStyle}></img>
            </div>
            {/* <Container>
                <Col>
                <Row>
                    <Image src = {Mail} class = '.mbImgContainer' alt = ''/>         
                </Row>
                </Col>
            </Container>  */}
        </div>


    );
}

export default Menubar;