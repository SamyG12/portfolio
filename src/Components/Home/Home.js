import React from "react";
import './Home.css';
import pp from "../media/bp.png"

<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
export default function Home(){
    return(
        <div className="Home" style={{backgroundColor: "#f2f4f8"}}>
        
            <div id="col-1">
            {/* <Carouselfun/>  */}
            <img src={pp} alt="Nature" class="responsive"/>
            </div>
            <div id="col-2">
            <div className='one'><header classname="title" style={{fontFamily:"times new roman"}}>A little bit about me</header></div>
            <p style={{fontFamily:"times new roman", marginTop:"10px",marginLeft:"5%", marginRight:"5%", fontSize: "2vw"}}> 
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

            <form action="https://drive.google.com/file/d/1lmYnzQpAbk6kC7czRfPVTP8769e2R5gp/view?usp=share_link">
            <button type="submit" value="Go to Google" >Resume</button>
            </form>
            {/* <button onclick="https://drive.google.com/file/d/1lmYnzQpAbk6kC7czRfPVTP8769e2R5gp/view?usp=share_link">Resume</button> */}
        
            {/* <button onclick="location.href='https://drive.google.com/file/d/1lmYnzQpAbk6kC7czRfPVTP8769e2R5gp/view?usp=share_link'" type="button">
            Resume</button> */}
            </div>

        </div>
    
    )
}