import React from "react";

import "./styles.css"

import Navbar from "./components/navbar";
import Hero from "./components/Hero";

export default function App() { 
    return (
        <div>
            <Navbar />
            <Hero />
        </div>
    );
}