import React from "react";
import { render } from "react-dom";
import { Link } from "react-router-dom";
import imga from "../ptjts/ad.png"
import "./item.css"


export default function ProjectItem({
  img= imga,
  title = 'Project Name',
  desc = "Lorem",
  link = "link"
}){

        
    return(
        <div>
        <Link to="/projects" className="projectItem__img">
            <img src={img}  alt="project img" />
        </Link>
        <div className="projectItem__info" style={{fontFamily:"Times new Roman", fontSize:16, backgroundColor:"light grey"}}>
        <>
        
        <form action={link} target="_blank">
        <button type="submit" value="Go to github" >Github</button>
        </form>
          <h3 className="projectItem__title">{title}</h3> 
          
        </>
        <p className="projectItem__desc">{desc}</p>
        
      </div>
        </div>   
    )
    
}