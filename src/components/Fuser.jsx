import React from 'react'
import Card from 'react-bootstrap/Card';
import {Col } from 'react-bootstrap';

export default function Fuser({user}) {
  return (
    <div>
      <Col md="3">
       <Card style={{ width: '18rem' }}>
      <Card.Body>
        <Card.Title>USER DEATAILS</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Text>
          Name: {user.name}
          <br/>
          Email:{user.email}
          <br/>
           Gen: {user.gen}
        </Card.Text>
        <Card.Link href="#">Edit</Card.Link>
        <Card.Link href="#">Delete</Card.Link>
        
      </Card.Body>
     </Card>
    </Col>
 
    </div>
  )
}
