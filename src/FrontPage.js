import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import  secureLocalStorage  from  "react-secure-storage";
import { Navigate } from "react-router-dom";
import Carousel from 'react-bootstrap/Carousel';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import  axios from "axios";
import Addanimal from './Addanimal';
import DetailPage from './DetailPage';
const alldata=[];
const animal={}
export default class FrontPage extends Component {
    constructor()
    {
        super();
        this.state={
            logout:false,
            animals:[],
            addA:0
        }
    }
    logout()
    {
       secureLocalStorage.removeItem('login');
       this.setState({logout:true})
    }
    componentDidMount(){
    axios
    .get("/animals")
    .then((res) => {
      console.log(res)
      res.data.map((d)=>
       alldata.push(d)
      )
      console.log(alldata)
      this.setState({ animals:res.data });
      console.log(this.state.animals)
    })
    .catch((error) => console.log(error));
    }
    AddAnimal()
    {
      this.setState({addA:1})
    }
    detail(id)
    {
      console.log(id)
      axios
      .get(`/animals/${id}`)
      .then((res) => {
        console.log(res)
        animal["date_of_birth"]=res.data.date_of_birth
        animal["status"]=res.data.status
        animal["image"]=res.data.image
        console.log(animal)
        
      })
      .catch((error) => console.log(error));
      <DetailPage animal={animal}  />
      this.props.history.push("/detail")
      }
    
  render() {
    return (
        <div>
        {secureLocalStorage.getItem('login')?
        <>
        <div>
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Dairy Farm</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link onClick={()=>this.logout()}>Logout</Nav.Link>
              <Nav.Link onClick={()=>this.AddAnimal()}>Add new Animal</Nav.Link>
              {this.state.addA?
                <Navigate replace to="/addAnimal" />
                :null
              }
              {this.state.logout?
                <Navigate replace to="/login" />
                :null
            }
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>
      <div>
      <Carousel style={{margin:0,padding:0,position:'relative' }}this>
      <Carousel.Item style={{'height':"1000px"}}>
        <img
          className="d-block w-100 h-50 carousel"
          src="./images/austin-santaniello-KMpp9_RKLrw-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"1000px"}}>
        <img
          className="d-block w-100 h-50" 
          src="./images/austin-santaniello-2Prc5cSgNJE-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item style={{'height':"1000px"}}>
        <img
          className="d-block w-100 h-50"
          src="./images/leon-ephraim-AxoNnnH1Y98-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div style={{marginLeft:'10%,position:absolute,top:0%'}}>
   {alldata.map((data)=>
     <>
  <Card onClick={()=>this.detail(data.id)} className='position-relative top-0' style={{ width: '18rem',display:'inline-block',marginLeft:'1%',marginTop:'1%',padding:0,alignContent:'center',boxShadow: '1px 2px 9px #888888'}}>
    <Card.Img variant="top" src={data.image} />
    <Card.Body>
      <Card.Title>Card Title</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card` content.
      </Card.Text>
      <Button variant="primary">Go somewhere</Button>
    </Card.Body>
  </Card></>)}
  </div>
    </div>
    </>
      :<Navigate replace to='/login'/>}
      </div>
    )
  }
}
