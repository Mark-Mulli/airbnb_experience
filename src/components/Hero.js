import React from "react";

import heroImg from "../images/Group 77.png"


export default function Hero() {
    return (
        <section className="hero">
            <img src = { heroImg } alt = "Hero Img" className="heroImage"></img>

            <h1 className="heroTitle">Online Experiences</h1>

            <p className="heroContent">Join unique interactive activities led by <br/> one-of-a-kind hosts—all without leaving <br/> home.</p>

        </section>

    );
}