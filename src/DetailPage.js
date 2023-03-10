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
         <table id='animalDetail' style={{}}>
         <tr>
          <td style={{fontWeight:'bold'}}>Height(Ft)</td>
          <td style={{paddingLeft:'10px',display:''}} id='spaceBw'>6.5</td>
          <td style={{paddingLeft:'10px',fontWeight:'bold'}}>Weight(KG)</td>
          <td style={{paddingLeft:'10px',display:''}}>4000</td>
         </tr>
         <tr>
           <td style={{fontWeight:'bold'}}>Breed</td>
           <td style={{width:'200px',display:''}}><span>Sahiwal</span></td>
           <td style={{paddingLeft:'10px',fontWeight:'bold'}}>Color</td>
           <td style={{width:'200px',display:''}}><span>Brown</span></td>

         </tr>
         </table>
       </div>
       <div className='col-6'>
       <FaWhatsappSquare icon="fa-brands fa-fa-whatsapp"style={{fontSize:'50px',marginLeft:'10%'}} /><span style={{marginLeft:'10%'}}>03070781256</span><br/>
       <FaPhoneAlt style={{fontSize:'40px',marginTop:'10px',marginLeft:'10%'}}/> <span style={{marginLeft:'12%'}}>03070781256</span> 
       </div>
     </div>
    </div>
    </div>
  )
}
