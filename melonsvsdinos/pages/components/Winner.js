import { Col, Container, Row } from 'react-bootstrap'

import styles from './Winner.module.css'

export default function Infocard(props) {

    if(props.winner == "draw"){
        return (
            <div className={styles.card}>
                <h2>It's a draw!</h2>
                <p>Vote for your favourite below!</p>
            </div>
        )
    }

  return (
    <div className={styles.card} style={props.winner == "melon" ? {backgroundColor: "#58b19f"} : {backgroundColor: "#f97f51"}}>
        <h2>🏆<span className={styles.winner}>{props.winner}</span> is the winner!🏆</h2>
    </div>
  )
}
