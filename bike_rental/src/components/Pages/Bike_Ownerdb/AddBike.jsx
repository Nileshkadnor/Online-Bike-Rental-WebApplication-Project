import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
import logoImage from '../../../assets/images/logobike.png';
const AddBike = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
        height: '100vh', // Set the height as per your design
      };
    const [id] = useState('');
    //const [own, ownchange] = useState('');
    const [vno, setVno] = useState('');
    const [rcbook, setRcbook] = useState('');
    const [bikerh, bikerhchange] = useState(0);
    const [vnoError, setVnoError] = useState(null);
    const [rcbookError, setRcbookError] = useState(null);
    const [bikerhError, setBikerhError] = useState('');

    const navigate = useNavigate();
        const handlesubmit = async (e) => {
            e.preventDefault();
        
            // Validate fields
            if (vno.trim() === '') {
              setVnoError('Vehicle No is required');
              return;
            } else {
              setVnoError(null);
            }
        
            if (rcbook.trim() === '') {
              setRcbookError('RC Book No is required');
              return;
            } else {
              setRcbookError(null);
            }
        
            if (bikerh === 0) {
              setBikerhError('Bike Rent/Hr is required');
              return;
            } else {
              setBikerhError(null);
            }
        
            const custobj = { vno, rcbook, bikerh};
            try {
              await fetch("http://localhost:8000/customer", {
                method: "POST",
                headers: { "content-type": "application/json" },
                body: JSON.stringify(custobj),
              });
        
            Swal.fire('Bike Added!', 'Your action submit', 'success');

            // Redirect to BikeList
            navigate('/AddBike');
        } catch (err) {
            console.log(err.message);
            // Show SweetAlert on error
            Swal.fire('Error!', 'An error occurred', 'error');
        }
    };
    
return (
<>

<div className="col-12" >
  <div className="row" >
        <div class="col-md-8" >
              <div className="sidebar">
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
          <section className="contact-wrapper p-5 " style={{backgroundColor:'#130e38'}}>
          <div class="col-md-4  mx-auto"  >
   <div className="card mt-3"  style={{ width: '170%',height:'520px' }}>
                    <form onSubmit={handlesubmit}>
                        <div className=" p-4 ">                        
                              <div className="col-lg-6 offset-lg-3">
                                  <h3 className="text-center">Add Bike</h3> 
                                                
                                  <div className="form-group">
                                      <label>ID</label>
                                      <input value={id}  disabled="disabled" className="form-control"></input>
                                  </div>
                                  {/* <div className="form-group">
                                      <label>Owner Name</label>
                                      <input value={own} onChange={e => ownchange(e.target.value)} className="form-control" required></input>
                                      {own.length === 0 && <span className="errormessage"> </span>}
                                  </div> */}
                                   <div className="form-group">
                    <label>Vehicle No</label>
                    <input value={vno} onChange={(e) => setVno(e.target.value)} className="form-control"
                    placeholder="Enter your Vehicle Number" required></input>
                    {vnoError && <span className="errormessage">{vnoError}</span>}
                  </div>
                

                  <div className="form-group">
                    <label>RC Book No</label>
                    <input value={rcbook} onChange={(e) => setRcbook(e.target.value)} className="form-control" placeholder="Enter your RC Book Number" required></input>
                    {rcbookError && <span className="errormessage" >{rcbookError}</span>}
                  </div>
                                  <div className="form-group">
                                    <label>Bike Rent/Hr</label>
                                    <input
                                        type="number"
                                        value={bikerh}
                                        
                                        onChange={(e) => {
                                            bikerhchange(e.target.value);
                                            setBikerhError('');
                                        }}
                                        className={`form-control ${bikerhError ? 'is-invalid' : ''}`}
                                    />
                                    {bikerhError && <div className="invalid-feedback">{bikerhError}</div>}
                                </div>  
                                {/* <div className="form-group">
                                <label>Adhar Card/Pan Card</label>
                                <input type="file"></input>
                              </div>   */}

                                
                                  <div className="form-group">
                                      <br></br>
                                      <button   className="btn btn-success" type="submit">Booked</button>

                                  </div>
                              </div>
                        
                          </div>
                    </form>
                    {/* </form> */}
        </div>
        </div>
    </section>
    </div>
    
    </div>

 </>
    );
}
export default AddBike;
