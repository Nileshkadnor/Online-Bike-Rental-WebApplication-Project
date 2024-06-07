import React from 'react';
import useFetch from '../../../useFetch';
import logoImage from '../../../assets/images/logobike.png';
export default function Chistory() {
  const gradientStyle = {
    background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
    height: '100vh', // Set the height as per your design
  };
  const { data: historyData, errordata: historyError } = useFetch(
    'http://localhost:8000/form'
  );
  const { data: statusData, errordata: statusError } = useFetch(
    'http://localhost:8000/updateStatus'
  );
 
  return (
    <>
<div className="row">
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
    <div class="col-md-4  mx-auto"  >
   <div className="card mt-5"  style={{ width: '170%',height:'480px' }}>
          <div className="card-body">
              <h5 className="card-title text-center">Bike History</h5>
              {historyError && <div>{historyError}</div>}
              {statusError && <div>{statusError}</div>}
                    {historyData && statusData &&
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr className="text-center">
                                    <td>Customer Name</td>
                                    <td>Hr</td>
                                    <td>Date</td>
                                    <td>price</td>
                                    
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {historyData.map((item, index) => (
                                    <tr key={item.id}>
                                        <td className="text-center">{item.custname}</td>
                                        <td className="text-center">{item.qty}</td>
                                        <td className="text-center">{item.dob}</td>
                                        <td className="text-center">{item.amt}</td>
                                        
                                        <td className="text-center">{statusData[index]?.status}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                </div>
            </div> 
    </div>
</section>
 </div>
   </>
  );
}