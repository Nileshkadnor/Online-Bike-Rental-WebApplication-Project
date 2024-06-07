import React from 'react'
import logoImage from '../../../assets/images/logobike.png';
const BikeOwnerDb = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
    height: '100vh', // Set the height as per your design
  };

  return <>
  <div class="col-md-4">
  <div className="sidebar ">
       <div className="logo d-flex align-items-center justify-content-center"> 
           
            <img src={logoImage} alt="Bike Rental Logo" style={{ height: '50px', marginRight: '5px' }} />
            
            <h2 className="text-center ">BIKE RENTAL</h2>
          </div>
          <hr className="my-1 w-75 mx-auto bg-primary border-4 border-top border-primary" />
          <div className="menu">
            <ul>              
                <li><a href="AddBike" className='text-center'>Add Bike</a></li>
                <li><a href="AddedBike" className='text-center'>Added Bike</a></li>
                <li><a href="Booking" className='text-center'>Booking</a></li>
                <li><a href="History" className='text-center'>History</a></li>
                <li><a href="Feed" className='text-center'>Feedback</a></li>
                <li><a href="/" className='text-center'>Logout</a></li> 
            </ul>
          </div>
          </div>
       </div>
 
   <section className="contact-wrapper p-5 " style={gradientStyle}>
    <div className="pb-3">
        <div className="container-xxl">
            <div className="row">
                    {/* <p>welcome title={user.name}</p>                */}
                    <div className="col-12 text-center ">              
                     </div>
                    {/* <img src={myImage3} className='d-block w-100' alt="My Image" /> */}
            
            </div>
        </div>
    </div>
  </section>    
  </>;
}

export default BikeOwnerDb



