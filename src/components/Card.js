import React from "react";

// import image_one from "../images/image_one.png"

import starImg from "../images/Star 1.png"  

export default function Card(props) {

    console.log(props)
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } 
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src= {require(`../images/${props.coverImg}`)} alt="card Img" className="card--Image"></img>

            <div className="card--stats">
                <img src= {starImg} alt="star" className="star--Image"></img>
                <span>{props.stats.rating.toFixed(1)}</span>
                <span className="gray">({props.stats.reviewCount}) &bull; &nbsp;  </span>
                <span className="gray">{props.location}</span>
            </div>

            <p>{props.title}</p>
            <p><span className="bold">From ${props.price} </span>/ person </p>
        </div>
    ); 
}