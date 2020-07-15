import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import cover from '../1.jpg';
import pic from './3.png'
import './Header.css';

export default function Header() {
    

    return (
        <div className="container">
            <img src={cover} alt="cover" style={{
                width: '100%',
                height: '90vh'
            }} />
            <div className="centered">
                 <h1 style={{
                        fontSize: '60px',
                        letterSpacing: '2px'
                    }}>
                        Ninja Bootcamp
                    </h1>
                <p style={{
                        fontSize: '42px'
                    }}>
                        Web Animation
                </p>
            </div>
            <div 
            className="tone2"
            >
                <img src={pic} alt='pic' className="pic" />
            </div>
        </div>
    )
}
