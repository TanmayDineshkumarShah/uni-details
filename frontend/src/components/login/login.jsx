import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useHistory } from "react-router-dom";
function LoginComponent() {

  const history = useHistory();


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [respData, setRespData] = useState({});


  function handleSubmit(event) {

    const data = {
      uid: event.target.uid.value,
      pass: event.target.pass.value
    }

    //console.log(data);

    axios
      .post('/login', data)
      .then((response) => {
        setRespData(response.data);
        if (response.data.code !== 200) {
          handleShow();
        }
        else {
          localStorage.setItem('uid', data.uid);
          history.push("/uni-details");
        }
        //console.log(response.data.message);
      });

    console.log("data posted");


    event.preventDefault();
  }

  return (

    // <Button>TANMAY</Button>
    <Container className="p-3">
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicEmail">
          <Form.Row>

            <Form.Label column sm={2}>User ID</Form.Label>
            <Col sm={10}>
              <Form.Control name="uid" type="text" placeholder="User ID" />
            </Col>

          </Form.Row>



        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Row>
            <Form.Label column sm={2} >Password</Form.Label>
            <Col sm={10}>
              <Form.Control name="pass" type="password" placeholder="Password" />
            </Col>
          </Form.Row>


        </Form.Group>

        <Button variant="primary" type="submit" >
          Submit
     </Button>
      </Form>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login Unsuccesful</Modal.Title>
        </Modal.Header>
        <Modal.Body>{respData.message}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

        </Modal.Footer>
      </Modal>
    </Container>




  );

}


export default LoginComponent;