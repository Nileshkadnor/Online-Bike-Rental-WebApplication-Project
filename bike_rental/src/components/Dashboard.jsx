import React from 'react';
import '../components/style/Dashboard.css'; // Import your CSS file

function Dashboard() {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Your logo or branding */}
        <h2 className='text-center'>BIKE RENTAL</h2>
        <hr className="my-1 w-75 mx-auto bg-primary border-4 border-top border-primary" />
      </div>
      <div className="menu">
        <ul>
          <li><a href="Add_Bike" className="text-center active"> Bike Owner</a></li>
          <li><a href="Add_Bike" className='text-center'>Add Bike</a></li>
          {/* <li><a href="#" className='text-center'>Bike View</a></li> */}
          <li><a href="Add_Bike" className='text-center'>Booking</a></li>
          <li><a href="Login" className='text-center'>Request</a></li>
          {/* <li><a href="#" className='text-center'>History</a></li>
          <li><a href="#" className='text-center'>Feedback</a></li>
          <li><a href="#" className='text-center'>Logout</a></li> */}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;
