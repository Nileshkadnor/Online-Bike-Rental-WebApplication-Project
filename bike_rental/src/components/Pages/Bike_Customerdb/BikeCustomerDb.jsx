import React from 'react'
import logoImage from '../../../assets/images/logobike.png';
const BikeCustomerDb = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
    height: '100vh', // Set the height as per your design
  };
  return <>
  <div className="col-md-12">
  <div class="col-md-6">
      <div className="sidebar">
      <div className="logo d-flex align-items-center justify-content-center"> 
      
            <img src={logoImage} alt="Bike Rental Logo" style={{ height: '50px', marginRight: '5px' }} />
        
            <h2 className="text-center ">BIKE RENTAL</h2>
          </div>
          <hr className="my-1 w-75 mx-auto bg-primary border-4 border-top border-primary" />
          <div className="menu">
            <ul>
              <li><a href="CaddedBike" className='text-center'>Book Bike</a></li>
              <li><a href="Chistory" className='text-center'>History</a></li>
              {/* <li><a href="Customerform" className='text-center'>Form</a></li> */}
              <li><a href="CustFeedback" className='text-center'>Feedback</a></li>
              {/* <li><a href="Payment" className='text-center'>Payment</a></li> */}
              <li><a href="/" className='text-center'>Logout</a></li> 
            </ul>
          </div>
       </div>
   </div>
   
   <section className="contact-wrapper p-5 "  style={gradientStyle}>
    <div className="pb-3">
        <div className="container">
            <div className="row">
                
                </div>
            </div>
       
        </div>
   
  </section>    
  </div>
  </>;
}

export default BikeCustomerDb