import React,{useState,useEffect} from 'react'
import Card from 'react-bootstrap/Card';

export default function DetailPage(props) {
  return (
    <div>
     <Card  className='position-relative top-0'>
    <Card.Img variant="top" src={props.image} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card content.
      </Card.Text>
    </Card.Body>
  </Card>
    </div>
  )
}
