import useFetch from "../../../useFetch";
import logoImage from '../../../assets/images/logobike.png';
const Feed = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
    height: '100vh', // Set the height as per your design
  };
  const { data, errordata, isloaded } = useFetch('http://localhost:8000/feed');
 
  return (
    
      <div className="row">
        <div className="col-md-8">
        <div className="sidebar">
     <div className="logo d-flex align-items-center justify-content-center"> 
       
                <img src={logoImage} alt="Bike Rental Logo" style={{ height: '50px', marginRight: '5px' }} />
          
            <h2 className='text-center'>BIKE RENTAL</h2>
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
   <div className="card mt-5"  style={{ width: '170%',height:'470px' }}>
            <div className="card-body">
              <h5 className="card-title">Customer Feedback</h5>
              {isloaded && <div>Please Wait</div>}
              {errordata && <div>{errordata}</div>}

              {data &&
                <table className="table table-bordered table-striped">
                  <thead>
                    <tr>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email Id</th>
                      <th>Message</th>
                    </tr>
                  </thead>
                  <tbody>
                    {data.map((item) => (
                      <tr key={item.id}>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.texta}</td>
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
  );
}

export default Feed;
