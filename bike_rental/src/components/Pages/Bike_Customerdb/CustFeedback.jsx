import { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import Swal from 'sweetalert2';
import logoImage from '../../../assets/images/logobike.png';

const Cust_Feedback = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
    height: '200vh', // Set the height as per your design
  };
const [fname, fnchange] = useState("");
const [lname, lnchange] = useState("");
const [email, emailchange] = useState("");
const [texta, textachange] = useState("");

const navigate = useNavigate();
const handlesubmit = (e) => {
  e.preventDefault();

  // Basic validation
  if (!fname.trim() || !lname.trim() || !email.trim() || !texta.trim()) {
    console.error("All fields are required");
    return;
  }

  let regobj = { fname, lname, email, texta };
  fetch("http://localhost:8000/feed", {
    method: "POST",
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(regobj)
  })
    .then(res => res.json())
    .then(res => {
      // Show SweetAlert on success
      Swal.fire({
        title: 'Feedback Submitted!',
        text: 'Thanks for Your Feedback...!!',
        icon: 'success',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          // If user clicks "OK", navigate to the payment page
          navigate('/');
        }
      });
    })
    .catch(error => {
      console.error('Error submitting form:', error);

      // Show SweetAlert on error
      Swal.fire({
        title: 'Error',
        text: 'There was an error submitting the feedback. Please try again.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    });
};
  return <>
  <div class="col-md-8">
      <div className="sidebar">
      <div className="logo d-flex align-items-center justify-content-center"> 
           
                <img src={logoImage} alt="Bike Rental Logo" style={{ height: '50px', marginRight: '5px' }} />
             
            <h2 className='text-center'>BIKE RENTAL</h2>
          </div>
            <hr className="my-1 w-75 mx-auto bg-primary border-4 border-top border-primary" />
          <div className="menu">
          <ul>
            <li><a href="CaddedBike" className='text-center'>Book Bike</a></li>
              <li><a href="Chistory" className='text-center'>History</a></li>
              <li><a href="CustFeedback" className='text-center'>Feedback</a></li>
              <li><a href="/" className='text-center'>Logout</a></li> 
            </ul>
          </div>
       </div>
   </div>
   <section className="contact-wrapper p-5 " style={{backgroundColor:'#130e38'}}>
    <div class="pb-3">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12 text-center" style={{color:'white'}}>
                  <h1 className=" text" >Reach Out to Us</h1>
                  <p className=' text fs-3'>We are only a step away from you</p>
                </div>
            </div>
        </div>
    </div>
  
   <div className="contact-message ">
    <div className="container" >
      <div className="row">
        <div className="col-lg-8 col-md-4 col-sm-12 m-auto">
            <div className="card p-5">
            <h2 className='footer-title mb-3'><b>Contact Us</b></h2>
            <p className='mb-2'><b>Address:</b> Nashik, Maharashtra</p>
                  <p className='mb-2'><b>Phone:</b>  <a className='footer-tel' href="8669681773">+91 8633445566</a></p>
                  <p className='mb-4'><b>E-mail:</b> <a className='footer-tel' href="tega@gmail.com">tega@gmail.com</a></p>
                 <p>"We are a leading IT company providing innovative technology solutions to businesses of all sizes. Our team of experts is dedicated to helping our clients improve their productivity and efficiency by leveraging the latest technologies. With years of experience and a passion for technology, we are equipped to provide a wide range of services, including software development, IT consulting, and managed services. At our core, we believe in providing our clients with the best possible experience. This means delivering high-quality solutions that are customized to meet their unique needs, and providing exceptional customer service and support. Our goal is to build long-lasting relationships with our clients, and to help them achieve their busines"</p>  
                <div className=" d-flex align-items-center justify-content-center">
                </div>
             </div>
        </div>
        </div>
      </div>
    </div> 
   
    <div >
    <form className="container "  onSubmit={handlesubmit}>
      <div className="row">
      <div class="col-md-6">.col-md-6</div>
        <div className="col-lg-8 col-md-10 col-sm-12 m-auto p-auto">
            <div className="card p-5">
                <h2 className='text-center mb-4'>Leave Us A message</h2>
                <div className=" d-flex align-items-center justify-content-center">
                    <div className="row g-3">
                        <div className="col-md-6">
                        {/* <div className="form-group">
                      <label>First Name<span className="errmsg">*</span></label>
                        <input value={fname} onChange={e => fnchange(e.target.value)} className="form-control" type='text' />
                      </div> */}
                            <input type="text" value={fname} onChange={e => fnchange(e.target.value)} className="form-control" placeholder="First name" aria-label="First name" />
                        </div>
                        <div className="col-md-6">
                            <input type="text" value={lname} onChange={e => lnchange(e.target.value)} className="form-control" placeholder="Last name" aria-label="Last name" />
                        </div>
                        <div className='col-12'>
                            <label htmlFor="exampleFormControlInput1" className="form-label mb-3">Enter Your Email address</label>
                            <input type="email" value={email} onChange={e => emailchange(e.target.value)} className="form-control" id="exampleFormControlInput1" placeholder="Email" />
                        </div>
                        <div className="col-12">
                            <label htmlFor="exampleFormControlTextarea1" className="form-label">Type in your message</label>
                            <textarea type="text" value={texta} onChange={e => textachange(e.target.value)} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                         </div>
                         <div className='col-12 text-center gap-2'>
                         <button id='button-link'className="btn btn-outline-dark w-75" type="submit" >Submit</button>
                        
                         </div>
                    </div>
                </div>
             </div>
        </div>
        </div>
        </form>
      </div>
</section>
  </>;
}

export default Cust_Feedback