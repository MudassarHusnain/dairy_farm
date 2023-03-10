import React, { useState,useEffect } from 'react'
import  secureLocalStorage  from  "react-secure-storage";
import { Navigate } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  axios from "axios";
import {useNavigate} from 'react-router-dom';
import NavbarA from './NavbarA';
import CarouselA from './CarouselA';
import CardA from './CardA';
// import history from './history';
export default function FrontPage()  {
   
    const [animals,setAnimals]=useState([])
    const [addA,setAddA]=useState(0)
    const [detail,setDetail]=useState(false)
    const [animal,setAnimal]=useState({})
    let navigate=useNavigate();
    
    useEffect (()=>{
    axios
    .get("/animals")
    .then((res) => {
      console.log(res)
      setAnimals(res.data)
      console.log(animals)
    })
    .catch((error) => console.log(error));
    },[]);
    function Detail(id)
    {
      axios
      .get(`/animals/${id}`)
      .then((res) => {
        console.log(res.data)
        setAnimal(res.data)
        navigate('/detail',{state:res.data})
        console.log(animal)
      })
      .catch((error) => console.log(error))
      }
    return (
        <div>
        {secureLocalStorage.getItem('login')?
        <>
        <NavbarA />
        <CarouselA/>
        <CardA animals={animals} />
    
   <Card animals={animals} />
    </>
      :<Navigate replace to='/login'/>}
      </div>
    )
  }
