import React from 'react'
import logo from "../assets/logo.png"
import '../styles/banner.css'

function Banner() {
    const title = "La maison Jungle"
    return (
        <div className="banner">
            <img src={logo} alt="logo" className="banner-logo" />
            <h1 className="banner-name">{title}</h1>
        </div>
    )
}

export default Banner
