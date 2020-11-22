import React, {Component} from 'react'
import './App.css';

 function Card(props) {
  
  
    return  (
      <div className="Cards">
        <div className="card-info">
          
          {/* ----------------------------- */}
          
            <img 
            className="image-card"
            src={props.userPhoto}
            alt="cover"/>
          
          {/* ----------------------------- */}
            
          <img className="photo-user" src={props.perPhoto} alt=""/>
            
          {/* ----------------------------- */}
          <h1 className="nick-name">
              {props.name}
          </h1>
          <p className="location"><i class="fas fa-map-marker-alt"></i>{props.location}</p>
        
          {/* ----------------------------- */}
    <h3 className="position" >{props.position}</h3>
            <p className="job-title">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo sint et ut voluptatibus accusantium non optio ipsa
            </p>
          {/* ----------------------------- */}
          <div className="contact-social">
              <a href="#">
                <i class="fab fa-whatsapp"></i>
              </a>
              <a href="#">
                <i class="fab fa-github"></i>
              </a>
              <a href="#">
                <i class="fab fa-facebook"></i>
              </a>
            
            </div>
          {/* ----------------------------- */}
        </div>

        </div>
        
     
     );
  
}
 
  

export default Card;
