import { useState } from "react";
import { useNavigate  } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Swal from "sweetalert2";
import pay from '../../../assets/images/paypal.jpg';
const Payment = () => {
  
  // const gradientStyle = {
  //   background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
  //   height: '100vh', // Set the height as per your design
  // };
  const [cardn, cardnchange] = useState('');
  const [ed, edchange] = useState('');
  const [email, emailchange] = useState('');
  const [cv, cvchange] = useState('');
  const [add, addchange] = useState('');
  const [ad, adchange] = useState('');
  const [city, citychange] = useState('');
  const [state, statechange] = useState('');
  const [zip, zipchange] = useState('');
 
  const navigate = useNavigate();
  const handlesubmit = (e) => {
    e.preventDefault();
  
    // Validation checks
    const cardRegex = /^\d{16}$/; // 16-digit card number
    const zipRegex = /^\d{6}$/; // 6-digit zip code
    const cvvRegex = /^\d{3}$/; // 3-digit CVV
    const cityRegex = /^[a-zA-Z\s]+$/; // Alphabetic characters and spaces
    const stateRegex = /^[a-zA-Z\s]+$/; // Alphabetic characters and spaces
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const addressRegex = /^[a-zA-Z0-9\s]+$/; // Alphanumeric characters and spaces
  
    if (!cardRegex.test(cardn)) {
      alert('Invalid card number. Please enter a 16-digit card number.');
      return;
    }
  
    if (!zipRegex.test(zip)) {
      alert('Invalid zip code. Please enter a 6-digit zip code.');
      return;
    }
  
    if (!cvvRegex.test(cv)) {
      alert('Invalid CVV. Please enter a 3-digit CVV.');
      return;
    }
  
    if (!cityRegex.test(city)) {
      alert('Invalid city. Please enter a valid city name.');
      return;
    }
  
    if (!stateRegex.test(state)) {
      alert('Invalid state. Please enter a valid state name.');
      return;
    }
  
    if (!emailRegex.test(email)) {
      alert('Invalid email. Please enter a valid email address.');
      return;
    }
  
    if (!addressRegex.test(add)) {
      alert('Invalid address. Please enter a valid address.');
      return;
    }
  
    if (!addressRegex.test(ad)) {
      alert('Invalid address 2. Please enter a valid address.');
      return;
    }
  
    // If all validations pass, proceed with the fetch
    let payobj = { cardn, ed, email, cv, add, ad, city, state, zip };
    fetch("http://localhost:8000/payment", {
      method: "POST",
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payobj)
    })
      .then(res => res.json())
      .then(res => {
        // Show SweetAlert on successful submission
        Swal.fire({
          title: 'Payment Successfully!',
          text: 'Your action has been submitted successfully.',
          icon: 'success',
        }).then(() => {
          // Navigate to the desired page after SweetAlert is closed
          navigate('/Custpay');
        });
      });
  }

const location = useLocation();
const amount = location.state && location.state.amount;
return <>
  <section className="payment p-5">
    <div className="container-xxl" onSubmit={handlesubmit}>
      
      <div className="row">
        <div className="col-md-6">
        <h1 className="mb-4 fs-3">Payment Method</h1>
        {amount && <p>Amount: {amount}</p>}
        
        <div className="accordion" id="accordionExample">
        <div className="card">
            <div className="card-header p-0" id="headingTwo">
              <button className="btn col-12 btn-light btn-block text-start collapsed p-3 rounded-0 border-bottom-custom" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <div className="d-flex align-items-center justify-content-between">
                  <div className='col-6'>
                    <span>Paypal</span>
                  </div>
                <div >
                    <img src={pay} alt="" className='img-fluid' />
                  </div> 
                </div>
              </button>
            </div>
            <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
              <div className="card-body">
                <input type="text" className="form-control" placeholder="Paypal email" required/>
              </div>
            </div>
          </div>
          <div className="card m-auto">
            <div className="card-header p-0">
              <button className="btn col-12 btn-light btn-block text-start p-3 rounded-0" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                <div className="d-flex align-items-center justify-content-between">
                  <div className="col-6">
                  <span>Credit card</span>
                  </div>
                   {/* <div className="icons col-6">
                    <img src={pay} alt="" className='img-fluid' />
                  </div>  */}
                </div>
              </button>
            </div>
            <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
              <div className="card-body payment-card-body">
                <span className="font-weight-normal card-text">Card Number</span>
                <div className="input mb-4">
                  <i className="fa fa-credit-card"></i>
                  <input type="text" value={cardn} onChange={e => cardnchange(e.target.value)} className="form-control" placeholder="0000 0000 0000 0000" required/>
                </div>
                <div className="row mt-3 mb-3">
                  <div className="col-md-6">
                    <span className="font-weight-normal card-text">Expiry Date</span>
                    <div className="input">
                      <i className="fa fa-calendar"></i>
                      <input type="text" value={ed} onChange={e => edchange(e.target.value)} className="form-control" placeholder="MM/YY" required/>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <span className="font-weight-normal card-text">CVC/CVV</span>
                    <div className="input mb-4">
                      <i className="fa fa-lock"></i>
                      <input type="text" value={cv} onChange={e => cvchange(e.target.value)} className="form-control" placeholder="000" required/>
                    </div>
                  </div>
                </div>
                <span className="text-muted certificate-text"><i className="fa fa-lock"></i> Your transaction is secured with ssl certificate</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-6 p-2">
            <h1 className=" mt-3 mb-3 fs-3">Fill the following details for shipping.</h1>
            <form className="row g-3 mb-3">
              <div className="col-12">
                <label htmlFor="inputEmail4" className="form-label">Email</label>
                <input type="email" value={email} onChange={e => emailchange(e.target.value)}placeholder="Enter your email" className="form-control" id="inputEmail4" required />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress" className="form-label">Address</label>
                <input type="text" value={add} onChange={e => addchange(e.target.value)} className="form-control" id="inputAddress" placeholder="1234 Main St" />
              </div>
              <div className="col-12">
                <label htmlFor="inputAddress2" className="form-label">Address 2</label>
                <input type="text" value={ad} onChange={e => adchange(e.target.value)} className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
              </div>
              <div className="col-md-6">
                <label htmlFor="inputCity" className="form-label">City</label>
                <input type="text" value={city} onChange={e => citychange(e.target.value)} placeholder="Enter your city" className="form-control" id="inputCity" />
              </div>
              <div className="col-md-4">
                <label htmlFor="inputState" className="form-label">State</label>
                <select id="inputState" value={state} onChange={e => statechange(e.target.value)} className="form-select">
                  <option selected>Choose...</option>
                  <option>Maharashtra</option>
                  <option>Gujarat</option>
                  <option>Goa</option>
                  <option>Rajasthan</option>
                  <option>Punjab</option>
                  
                </select>
              </div>
              <div className="col-md-2">
                <label htmlFor="inputZip" className="form-label">Zip</label>
                <input type="text" value={zip} onChange={e => zipchange(e.target.value)} placeholder="000-000" className="form-control" id="inputZip" />
              </div>
              <div className="col-12 mt-5">
                {/* <button id="button-linker" type="submit" onClick={notify}>Proceed To Pay</button> */}
                <button  id="button-linker" type="submit" >Proceed To Pay</button>
                
            

              </div>
            </form>
          </div> 
            
        </div>
     
        </div>
  </section>
  </>;
}

export default Payment