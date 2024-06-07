import React, { useState, useEffect } from 'react';
import { useNavigate} from "react-router-dom";
import Swal from "sweetalert2";
const Customerform = () => {
  const [data, setData] = useState([]);
    const [custname, custnamechange] = useState('');
    const [dob, dobchange] = useState('');
    const navigate=useNavigate();
    const [qty, qtychange] = useState('');
    const [rate] = useState('');
    const [status] = useState('');
    const [bikerh, setBikerh] = useState(0);
    const [selectedRentId, setSelectedRentId] = useState('');
    const [ano, setAno] = useState('');
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8000/customer');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (selectedRentId && data.length > 0) {
      const selectedRent = data.find((item) => item.id === selectedRentId);
      if (selectedRent) {
        setBikerh(selectedRent.bikerh);
      }
    }
  }, [selectedRentId, data]);
  const amount = parseFloat(qty) * parseFloat(bikerh);
    const handleSucessClick = () => {
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Your action has been submitted successfully.',
      }).then(() => {
        navigate('/Payment', { state: { amount } });
      });
    };
    const handlesubmit = (e) => {
      e.preventDefault();
      const custobj = { custname, dob, qty, rate, amt: amount, status,ano  };
      fetch('http://localhost:8000/form', {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(custobj),
      })
        
        .catch((err) => {
          console.log(err.message);
        });
    };
return (
<>    
<div  style={{backgroundColor:'#130e38',height:'640px'}}>
 <div className="container d-flex justify-content-center align-items-center vh-100" >
    <div className="col-7 ">
      <form  onSubmit={handlesubmit}>
         <div className="card  p-4 ">
           <div className="col-lg-6 offset-lg-3">
              <h3 className="text-center">Customer Form</h3>            
                 <div className="form-group">
                    <label>Customer Name</label>
                    <input type="text"value={custname} onChange={e => custnamechange(e.target.value)} 
                    placeholder="Enter Customer Name" className="form-control" required></input>
                  </div> 
                  <div className="form-group">
                     <label>Date Of Booking</label>
                     <input value={dob} type="date" onChange={e => dobchange(e.target.value)}  className="form-control"  placeholder="Inv. Date" required></input>
                     {dob.length === 0 && <span className="errormessage"> </span>}
                  </div>                              
                  <div className="form-group">
                    <label>Hours</label>
                    <input type = "number" value={qty} onChange={e => qtychange(e.target.value)} className="form-control" required></input>
                 </div>
                 <div className="form-group">
                            <label>Adhar Card/Pan Card</label>
                            <input value={ano} onChange={(e) => setAno(e.target.value)} className="form-control"
                            placeholder="Enter your Adhar/Pancard Number" required></input>
                           
                          </div>  
                 {/* <div className="form-group">
                    <label>Bike Rent </label>
                    <input
                      value={bikerh}
                      className="form-control"
                      readOnly
                      disabled 
                      required
                    ></input>
                  </div>      */}
                  
                  <div className="form-group">
                    <label>Bike Rent</label>
                    <select
                      value={selectedRentId}
                      onChange={(e) => setSelectedRentId(e.target.value)}
                      className="form-control"
                      required
                    >
                      <option value="" disabled>
                        Select Bike Rent
                      </option>
                      {data.map((item) => (
                        <option key={item.id} value={item.id}>
                          {item.name} - ₹{item.bikerh}
                        </option>
                      ))}
                    </select>
                  </div>                                    
                {/* {data.map(data => (
                   <li key={data.id} >
                               
                   Owner Bikes Hr/R: {data.bikerh}
                    </li>
                  ))} */}

                 {/* <label>total</label>
                 <input value= {bikerh}onChange={e => bikerhchange(e.target.value)} disabled="disabled" className="form-control" required></input> */}
                    
                    <div className="text-end">
                      <h className="mb-3">
                        <b>Total</b>
                      </h>
                      <div className="align-items-center">
                        <div>
                          <p className="total-price align-items-center">
                            <b>₹ {amount}</b>
                          </p>
                        </div>
                      </div> 
                    </div>
                    
                  <div className="form-group">
                       
                        <button type="button" onClick={handleSucessClick} className="btn btn-success" >Submit</button>
                       
                   </div>
                </div>                       
           </div>
        </form>
</div>
  </div>
</div>
 </>
    );
}

export default Customerform;