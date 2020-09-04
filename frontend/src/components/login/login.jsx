import React from "react";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import axios from 'axios';
//import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function LoginComponent(){

  

  
  

  function handleSubmit(event){

    const data={
      uid:event.target.uid.value,
      pass:event.target.pass.value
    }

    console.log(data);

    axios
      .post('/login',data)
      .then((response)=>{
        console.log("hi login success");
      });

    //console.log(data);

    console.log("data posted");

   
    event.preventDefault();
  }

    return(
      // <Button>TANMAY</Button>
      <Container className="p-3">
      <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formBasicEmail">
      <Form.Row>

        <Form.Label  column sm={2}>User ID</Form.Label>
        <Col sm={10}>
          <Form.Control name="uid"  type="text" placeholder="User ID"  />
        </Col>

      </Form.Row>
      
      
      
    </Form.Group>
  
     <Form.Group  controlId="formBasicPassword">
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
      </Container>
    
    
    );

     
    
}


export default LoginComponent;