import React, { useState, useEffect } from "react";
import { motion } from 'framer-motion';
import { Card, CardGrid, Container, Header1 } from "./Elements";
import Header from './components/Header'
import "./App.css";
import Menu from "./Menu";
import blue from "./blue.png";
import purp from "./purp.png";
import black from "./black.png";
import green from "./green.png";

function App() {

  const [shouldShowActions, setShouldShowActions] = useState(0);
    const [lastYPos, setLastYPos] = useState(0);

    useEffect(() => {
        function handleScroll(){
            const yPos = window.scrollY;
            const isScrollinUp = yPos < lastYPos;

            setShouldShowActions(isScrollinUp);
            setLastYPos(yPos);
        }
        window.addEventListener('scroll', handleScroll, false);

    }, [lastYPos]);

  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
    >
      
      <Header1>
        <Menu />
      </Header1>
        <Header />
      <Container>
      <br />
        <CardGrid>
          <motion.div 
          animate={{opacity: shouldShowActions ? 0 : 1 }}
          >
            <Card style={{ background: "var(--purp)" }} >
              <h3>Some card</h3>
              <img src={purp} alt="purp" />
            </Card>
          </motion.div>
          <Card style={{ background: "var(--blue)" }}>
            <h3>Some card</h3>
            <img src={blue} alt="blue" />
          </Card>
          <Card style={{ background: "var(--black)" }}>
            <h3>Some card</h3>
            <img src={black} alt="black" />
          </Card>
          <Card style={{ background: "var(--green)" }}>
            <h3>Some card</h3>
            <img src={green} alt="green" />
          </Card>
        </CardGrid>
      </Container>
    </motion.div>
  );
}

export default App;
