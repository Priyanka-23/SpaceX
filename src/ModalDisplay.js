import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import {Modal} from 'react-bootstrap';

 const MODAL_STYLES={
   position:'fixed',
   top:'50%',
   left:'50%',
   transform:'translate(-50%, -50%)',
   padding:'50px',
   backgroundColor:'grey',
   zIndex:1000
 }
 const IMG_STYLES={
   width:'10%',
   height:'10%',
 }
 export function ModalDisplay(props){
  return(
  <Modal style={MODAL_STYLES}
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
        <Container>
            <Row>
              <Col><img style={IMG_STYLES} src={props.img}/></Col>
              <Col><h3>{props.mission}</h3></Col>
              <Col><button onClick={props.onHide}>X</button></Col>
            </Row>
            </Container>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Container>
            <Row>
              <Col><h4>Flight Number</h4></Col>
              <Col>{props.flight_number}</Col>
            </Row>
            <Row>
              <Col><h4>Mission Name</h4></Col>
              <Col>{props.mission_name}</Col>
            </Row>
            <Row>
              <Col><h4>Rocket Type</h4></Col>
              <Col>{props.rocket_type}</Col>
            </Row>
            <Row>
              <Col><h4>Rocket Name</h4></Col>
              <Col>{props.rocket_name}</Col>
            </Row>
            <Row>
              <Col><h4>Manufacturer</h4></Col>
              <Col>{props.manufacturer}</Col>
            </Row>
            <Row>
              <Col><h4>Nationality</h4></Col>
              <Col>{props.nationality}</Col>
            </Row>
          </Container>
          
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  
  )
}