import React, { useCallback, useRef, useEffect, useState } from "react";
import { Link } from 'react-router-dom'
import { Card, Row, Col, Button } from 'react-bootstrap'

export default function ShortPatientCard(props) {
  if (!!props.person) {
    const { person } = props
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" width='360px' src={person.image ? person.image : "https://342031.selcdn.ru/rusplt/1733/2223/Pel_ttserGL.png"} rounded />
        <Card.Body>
          <Card.Title style={{ color: "#047B7C" }}><Link to={`/${person._id}/patient-card`}>{person.name}</Link></Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{person.age}</Card.Subtitle>
          <Card.Text>
            Диагноз:{person.diagnosis}<br></br>
            Лечащий врач: { person.doctor.doctorName }  {person.doctor.doctorSurname}
</Card.Text>

          <Row>
            <Col> <Button as={Link} to={`/${person._id}/pain-calendar`} variant="secondary" style={{ backgroundColor: "#047B7C" }} size="mg" active>Дневник боли</Button></Col>
            <Col> <Button as={Link} to={`/${person._id}/plan`} variant="secondary" style={{ backgroundColor: "#047B7C" }} size="mg" active>План ухода</Button></Col>
          </Row>

        </Card.Body>
      </Card>
    )
  } else {
    return (<div>Вы можете добавить пациетна</div>)
  }
}
