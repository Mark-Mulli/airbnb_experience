import React from "react";

import "./styles.css"

import Navbar from "./components/navbar";
import Hero from "./components/Hero";
import Card from "./components/Card";
import data from "./data";

export default function App() { 

    const review = data.map(item => {
        return (
            <Card 
                //use require function to render the image
                key = {item.id}
                img = {require(`./images/${item.coverImg}`)}
                rating = {item.stats.rating}
                reviewCount = {item.stats.reviewCount}
                country = {item.location}
                title = {item.title}
                price = {item.price} 
                openSpots = {item.openSpots}
            />
        );
    });

    return (
        <div>
            <Navbar />
            <Hero />
            <section className="cards-list">
                {review}
            </section>
        </div>
    );
}