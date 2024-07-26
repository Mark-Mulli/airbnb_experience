import React from "react";

// import image_one from "../images/image_one.png"

import starImg from "../images/Star 1.png"  

export default function Card(props) {

    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } 
    else if (props.country === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src= {props.img} alt="card Img" className="card--Image"></img>

            <div className="card--stats">
                <img src= {starImg} alt="star" className="star--Image"></img>
                <span>{props.rating.toFixed(1)}</span>
                <span className="gray">({props.reviewCount}) &bull; &nbsp;  </span>
                <span className="gray">{props.country}</span>
            </div>

            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span>/ person </p>
        </div>
    ); 
}