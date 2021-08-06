import React from 'react';
import Modal from 'react-bootstrap/Modal';
import { Button, Col, Container, Row } from 'react-bootstrap';
export function ModalDisplay(props) {
  console.log(props);
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <img src={props.img}/>
            <h4>{props.mission}</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Row>
         <Col> {props.details} </Col>
          </Row>
          <Row>
            <Col>Flight Number</Col>
            <Col xs={9}>{props.flight_number}</Col>
          </Row>
          <Row>
            <Col>Mission Name</Col>
            <Col xs={9}>{props.mission_name}</Col>
          </Row>
          <Row>
            <Col>Rocket Type</Col>
            <Col xs={9}>{props.rocket_type}</Col>
          </Row>
          <Row>
            <Col>Rocket Name</Col>
            <Col xs={9}>{props.rocket_name}</Col>
          </Row>
          <Row>
            <Col>Manufacturer</Col>
            <Col xs={9}>{props.manufacturer}</Col>
          </Row>
          <Row>
            <Col>Nationality</Col>
            <Col xs={9}>{props.nationality}</Col>
          </Row>
          {/* <Row>
            <Col>Payload Type</Col>
            <Col xs={9}>{props.payload_type}</Col>
          </Row> */}
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  
  
  // render(<ModalDisplay />);
  