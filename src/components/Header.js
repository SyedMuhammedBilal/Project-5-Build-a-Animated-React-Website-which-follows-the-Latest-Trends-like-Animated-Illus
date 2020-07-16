import React from 'react'
import pic from '../images/banner1.png'
import './Header.css';

export default function Header() {
    

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
            <section>
                <div className="left_side">
                    <img src={pic} alt="pic" />
                </div>
                <div className="right_side">
                    <h1>NINJA BOOTCAMP</h1>
                    <p>Animated React Website and Animated Illustrations</p>
                    <button>Welcome</button>
                </div>
            </section>
        </div>
    )
}
