import React from "react";
import Carouselfun from "../Carousel/Carousel";
import './Home.css';

export default function Home(){
    return(
        <div className="Home" style={{backgroundColor: "#f2f4f8"}}>
        
            <div id="col-1">
            <Carouselfun/> 
            </div>
            <div id="col-2">
            <div className='one'><header classname="title" style={{fontFamily:"times new roman"}}>A little bit about me</header></div>
            <p style={{fontFamily:"times new roman", marginTop:"10px",marginLeft:"5%", marginRight:"5%", fontSize: 22}}> 
                    My name is Samy Gadi, I have recently completed my bachelor's degree in computer science and 
                    information security. During Summer of 2022 I completed an internship as a Software Engineer 
                    at American Express,  had the chance to put to practice my developement skills that I learned in school
                    . As of Jan 30 2023 I will be a full time SWE at AMEX. During my free I enjoy watching and playing soccer, 
                    I try to travel to new places at least once a year. A fun fact about me is that I speak 4 laguages and I am
                    currently learning my fifth, English, Berber (native), French, Arabic and a little spanish.

                    <br/>
                    <br/>
                    Programming Languages: Python, C++, JS, Java
                    <br/>
                    Tools: Pycharm, XCode, Netbeans.
            </p>
        
            
            </div>

        </div>
    
    )
}