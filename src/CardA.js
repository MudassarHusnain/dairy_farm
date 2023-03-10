import React from 'react'
import Card from 'react-bootstrap/Card';
import  axios from "axios";
import { useNavigate } from 'react-router';
import Button from 'react-bootstrap/Button';
export default function CardA(props) {
    let navigate=useNavigate();
    function Detail(id)
    {
      axios
      .get(`/animals/${id}`)
      .then((res) => {
        console.log(res.data)
        navigate('/detail',{state:res.data})
      })
      .catch((error) => console.log(error))
      }
  return (
    <div>
    
    <div style={{marginLeft:'10%',position:'relative',marginTop:'5%'}}>
    {props.animals.map((data)=>
        <Card key={data.id} onClick={()=>Detail(data.id)} className='position-relative top-0' style={{ width: '18rem',display:'inline-block',marginLeft:'1%',marginTop:'1%',padding:0,alignContent:'center',boxShadow: '1px 2px 9px #888888'}}>
          <Card.Img variant="top" src={data.image} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              {data.description}
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>)}
    </div>
    </div>
  )
}
