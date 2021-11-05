import React from 'react'
import logo from "../assets/logo.png"


function Banner() {
    const title = "La maison Jungle"
    return (
        <div className="banner">
            <div className="banner-logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="banner-name">
                <h1>{title}</h1>
            </div>
            
        </div>
    )
}

export default Banner
