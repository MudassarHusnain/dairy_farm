import React,{} from 'react';
import Card from 'react-bootstrap/Card';
import { useLocation } from "react-router-dom";
import './DetailPage.css'
import NavbarA from './NavbarA';

import {FaWhatsappSquare,FaPhoneAlt } from "react-icons/fa";
export default function DetailPage() {
  const location=useLocation();
  // console.log(location.state)
  return (
    <div>
    <NavbarA />

    <div className='main'>
     <div className='row'>
         <div className='col-6 pic'>
         <img className='img' src={location.state.image} />
         </div>
         <div className='col-6 desc'>
       
         <p id='desc'>this is the description of the animal so please Write the full correct sentence about the animal and also add the height,age and weight of the animals</p>  

         </div>
     </div>
     <div className='row position-relative'>
       <div className='col-6'>
         <table id='animalDetail' style={{border:'1px solid black'}}>
         <tr>
          <td style={{border:'1px solid black',fontWeight:'bold'}}>Height</td>
          <td style={{border:'1px solid black',paddingLeft:'20px'}} id='spaceBw'>6.5</td>
          <td style={{border:'1px solid black',paddingLeft:'20px',fontWeight:'bold'}}>Weight</td>
          <td style={{border:'1px solid black',paddingLeft:'20px'}}>4000pound</td>
         </tr>
         </table>
       </div>
       <div className='col-6'>
       <FaWhatsappSquare icon="fa-brands fa-fa-whatsapp"style={{fontSize:'50px'}} /><span style={{marginLeft:'10%'}}>03070781256</span><br/>
       <FaPhoneAlt style={{fontSize:'40px',marginTop:'10px'}}/> <span style={{marginLeft:'12%'}}>03070781256</span> 
       </div>
     </div>
    </div>
    </div>
  )
}
