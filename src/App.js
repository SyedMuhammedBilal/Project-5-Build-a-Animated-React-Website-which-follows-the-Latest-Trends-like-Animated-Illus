import React from "react";
import { motion } from 'framer-motion';
import Header from './components/Header'
import "./App.css";
import Content from "./components/Content";
import Content2 from "./components/Content2";
import Content3 from "./components/Content3";
import Footer from "./components/Footer";

function App() {

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
     <Header />
      <div className="container">
        <Content />
        <Content2 />
        <Content3 /> 
      </div>
     <Footer />
     
    </motion.div>
  );
}

export default App;
