import React from "react";

// import image_one from "../images/image_one.png"

import starImg from "../images/Star 1.png"  

export default function Card(props) {
    return (
        <section className="card">
            <img src= {props.img} alt="card Img" className="card--Image"></img>

            <div className="card--stats">
                <img src= {starImg} alt="star" className="star--Image"></img>
                <span>{props.rating.toFixed(1)}</span>
                <span className="gray">({props.reviewCount}) &bull; &nbsp;  </span>
                <span className="gray">{props.country}</span>
            </div>

            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span>/ person </p>
        </section>
    ); 
}