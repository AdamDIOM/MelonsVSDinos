import Head from 'next/head'
import { Col, Container, Row } from 'react-bootstrap'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
    <header className={styles.header}>

      <h1>Melons Vs Dinos</h1>
    </header>

    <article>
      <Container className={styles.content}>
        <Row>
          <Col xs={12} md={6}>
            <h2 className={styles.melonHeader}>Melons</h2>
          </Col>
          <Col xs={12} md={6}>
            <h2 className={styles.dinoHeader}>Dinos</h2>
          </Col>
        </Row>
      </Container>
</article>

    </>
  )
}
