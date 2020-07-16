import React from 'react'
import "./navbar.css";

export default function navbar() {
    return (
        <div className="site_header">
            <nav >
                <div className="logo">
                    <h1>Modern Website</h1>
                </div>
                <div className="menu">
                    <ul> 
                        <li>Home</li>
                        <li>Services</li>
                        <li>Contact us</li>
                        <li>About us</li>                    
                    </ul>
                </div>
            </nav>
        </div>
    )
}
