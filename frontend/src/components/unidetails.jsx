import React, { useState } from "react";
import { Form, Row, Col, Modal, Card, Button, Container, Navbar, Nav, } from "react-bootstrap";
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import { useHistory } from "react-router-dom";


function UnidetailsComponent() {
    const history = useHistory();
    const [show, setShow] = useState(false);


    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [value,setValue]=useState("");
    const [uniData,setUniData]=useState({});

    function handleSubmit(event){
        axios
      .post('/insert-data',uniData)
      .then((response)=>{
        
        if(response.data.code!==200){
          console.log("error in api post")
        }
        else{
          
          history.push("/view-details");
        }
        //console.log(response.data.message);
      });

    

   
        event.preventDefault();
    }

    

    function handleProceed(event) {
        
        const sampleUniData = {
            uniname: event.target.uniname.value,
            registration_date:event.target.reg_date.value,
            expiration_date:event.target.exp_date.value,
            img_url: event.target.img_url.value,
            no_of_students:event.target.no_of_students.value,
            email: event.target.email.value,
            web_url:event.target.web_url.value,
            contact_no:event.target.contact_no.value,
        }

        setUniData(sampleUniData);
        setValue(JSON.stringify(sampleUniData,undefined,4));
        
        handleClose();
        event.preventDefault();


    }


    var formDisplay = "true";

    function LogoutClicked() {
        localStorage.removeItem('uid');
    }

    return (
        <Container>
            <Navbar bg="light" expand="lg">

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link ><Button onClick={handleShow}>ADD</Button></Nav.Link>
                        <Nav.Link href="/view-details"><Button>VIEW</Button></Nav.Link>

                    </Nav>

                    <Nav>
                        <Nav.Link href="/"><Button onClick={LogoutClicked}>LOGOUT</Button></Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
            <Card>
                <Card.Body>
                    <p style={{ textAlign: "right" }}>Hello {localStorage.getItem('uid')}</p>

                    <Card.Body >
                        <Form style={{ display: formDisplay }} onSubmit={handleSubmit} >
                            <Form.Control as="textarea" rows="10" value={value}/>

                            <br></br><br></br>

                            <Form.Group as={Row}>
                                <Col sm={12}>
                                    <Button size="lg" type="submit">SUBMIT</Button>
                                </Col>
                            </Form.Group>


                        </Form>
                    </Card.Body>

                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add University</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form onSubmit={handleProceed}>
                        <Form.Group as={Row} controlId="1">
                            <Form.Label column sm={2}>
                                University Name
                            </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="uniname" type="text" placeholder="University Name" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="2">
                            <Form.Label column sm={2}>
                                Registration Date
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="reg_date" type="date" placeholder="Registration Date" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="3">
                            <Form.Label column sm={2}>
                                Expiration Date
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="exp_date" type="date" placeholder="Expiration Date" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="4">
                            <Form.Label column sm={2}>
                                Image Url
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="img_url" type="text" placeholder="Image URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="5">
                            <Form.Label column sm={2}>
                                Number of Students
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="no_of_students" type="number" placeholder="Number Of Students" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="6">
                            <Form.Label column sm={2}>
                                Email
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="email" type="email" placeholder="Email" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="7">
                            <Form.Label column sm={2}>
                                Web Url
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="web_url" type="text" placeholder="Web URL" />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Row} controlId="8">
                            <Form.Label column sm={2}>
                                Contact Number
                        </Form.Label>
                            <Col sm={10}>
                                <Form.Control name="contact_no" type="number" placeholder="Contact Number" />
                            </Col>
                        </Form.Group>





                        <Form.Group as={Row}>
                            <Col sm={{ span: 10, offset: 2 }}>
                                <Button type="submit">Proceed</Button>
                            </Col>
                        </Form.Group>
                    </Form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
          </Button>

                </Modal.Footer>
            </Modal>
        </Container>
    );


}
export default UnidetailsComponent;