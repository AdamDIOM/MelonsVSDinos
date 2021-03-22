import Head from 'next/head'
import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Infocard from './components/Infocard'
import Winner from './components/Winner'

export default function Home() { 

    const [dinoFacts, setDinoFacts] = useState([
      ["🕹", "There is an amazing Chrome dino game"],
      ["👨‍🦳" , "They are very old, almost as old as Ryan Swift"]
    ])

    const [melonFacts, setMelonFacts] = useState([
      ["☠️", "Jack is allergic to them"],
      ["👨‍🦳", "They have their own squad"],
      ["🍉", "They are yeetful"]
    ])
const [currentFact, setCurrentFact] = useState("");

function handleChange(event) {
  setCurrentFact(event.target.value);
}
    function addFact(type, fact, emoji){
      if(type == "melon"){

        const tempFacts = [...melonFacts]
        tempFacts.push([emoji, fact])

        setMelonFacts(tempFacts)
      }
      else{
        const tempFacts = [...dinoFacts]
        tempFacts.push([emoji, fact])

        setDinoFacts(tempFacts)
      }

      setCurrentFact("");
      return true;
    }
  return (
    <>
    <header className={styles.header}>

      <h1>Melons Vs Dinos</h1>
    </header>

    <article>
      <Container className={styles.content}>


        <Winner winner={dinoFacts.length > melonFacts.length ? "dino" : dinoFacts.length == melonFacts.length ? "draw" : "melon"}></Winner>
        <Row>
          <Col xs={12} md={6}>
            <h2 className={styles.melonHeader}>Melons</h2>
            {
              melonFacts.map((fact) =>
              <Infocard text={fact[1]} emoji={fact[0]} type="melon" />
              )
            }
          </Col>
          <Col xs={12} md={6}>
            <h2 className={styles.dinoHeader}>Dinos</h2>
            {
              dinoFacts.map((fact) =>
                <Infocard text={fact[1]} emoji={fact[0]} type="dino" />
              )
            }
          </Col>
        </Row>
      </Container>
      <Container className={styles.content}>
        <h3>Add a fact</h3>
        <Row>
          <Col xs={12} md={8}>
            <input type="text" value={currentFact} onChange={handleChange} className={styles.form} />
          </Col>
          <Col xs={6} md={2}>
           <button className={styles.button} onClick={() => {addFact("melon", currentFact,"🌴")}}>Add to Melon</button>
          </Col>
          <Col xs={6} md={2}>
                    <button className={styles.button} onClick={() => {addFact("dino", currentFact,"🌴")}}>Add to Dino</button>

          </Col>
        </Row>
      </Container>
</article>
    </>
  )
}
