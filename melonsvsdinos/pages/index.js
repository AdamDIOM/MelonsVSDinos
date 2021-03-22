import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'
import Infocard from './components/Infocard'
import Winner from './components/Winner'

export default function Home() {

    const dinoFacts = [
      ["🕹", "There is an amazing Chrome dino game"],
      ["👨‍🦳" , "They are very old, almost as old as Ryan Swift"]
    ]

    const melonFacts = [
      ["☠️", "Jack is allergic to them"],
      ["👨‍🦳", "They have their own squad"],
      ["🍉", "They are yeetful"]
    ]

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
</article>

    </>
  )
}
