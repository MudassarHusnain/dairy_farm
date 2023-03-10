import Carousel from 'react-bootstrap/Carousel';
import React from 'react'

export default function CarouselA() {
  return (
    <div>
    <Carousel style={{margin:0,padding:0,position:'relative' }}>
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
          src="./images/austin-santaniello-2Prc5cSgNJE-unsplash.jpg "
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
    </div>
  )
}
