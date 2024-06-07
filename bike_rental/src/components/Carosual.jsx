import React from 'react';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
//const myImage4 = require('../assets/images/bike10.jpg');
const myImage1 = require('../assets/images/bike4.jpg');
const myImage2 = require('../assets/images/bike8.jpg');
const myImage3 = require('../assets/images/bike9.jpg');
export default function Carosual() {
  return (
    <>
    {/* <div>
      <img src={myImage2} className=' w-100' style={{ maxHeight: '600px' }} alt="My Image" />
    </div> */}
    <MDBCarousel   fade  interval={2000}>
    {/* <MDBCarouselItem >
        <img src={myImage4}  style={{ maxHeight: '600px' }}  className='d-block w-100' alt="My Image" />
      </MDBCarouselItem> */}
      <MDBCarouselItem >
        <img src={myImage1}  style={{ maxHeight: '600px' }}  className='d-block w-100' alt="My Image" />
        
      </MDBCarouselItem>

      <MDBCarouselItem >
        {/* <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg' className='d-block w-100'
         alt='...' /> */}
         <img src={myImage2}  style={{ maxHeight: '600px' }}  className='d-block w-100' alt="My Image" />

      </MDBCarouselItem>

      <MDBCarouselItem >
        {/* <img src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg' className='d-block w-100' 
        alt='...' /> */}
         <img src={myImage3}  style={{ maxHeight: '600px' }}  className='d-block w-100' alt="My Image" />
        
      </MDBCarouselItem>
    </MDBCarousel>
</>
  );
}