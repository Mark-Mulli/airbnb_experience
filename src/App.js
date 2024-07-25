import React from "react";

import "./styles.css"

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";

export default function App() { 
    return (
        <div>
            <Navbar />
            <Hero />
            <Card 
                //use require function to render the image
                img = {require("./images/image_one.png")}
                rating = {5.0}
                reviewCount = {6}
                country = "Kenya"
                title = "Life lessons with Katie Zaferes"
                price = {136} 
            />
        </div>
    );
}