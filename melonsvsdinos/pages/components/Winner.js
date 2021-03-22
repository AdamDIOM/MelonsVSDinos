import { Col, Container, Row } from 'react-bootstrap'

import styles from './Winner.module.css'

export default function Infocard(props) {
  return (
    <div className={styles.card} style={props.winner == "melon" ? {backgroundColor: "#58b19f"} : {backgroundColor: "#f97f51"}}>
        <h2>🏆<span className={styles.winner}>{props.winner}</span> is the winner!🏆</h2>
    </div>
  )
}
