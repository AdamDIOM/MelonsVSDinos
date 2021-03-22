import { Col, Container, Row } from 'react-bootstrap'

import styles from './Infocard.module.css'

export default function Infocard(props) {
  return (
    <div className={styles.card} style={props.type == "melon" ? {backgroundColor: "#58b19f"} : {backgroundColor: "#f97f51"}}>
        <Row>
            <Col xs={2} sm={1}><div className={styles.emoji}>{props.emoji}</div></Col>
            <Col xs={10} sm={11}>{props.text}</Col>
        </Row>
    </div>
  )
}
