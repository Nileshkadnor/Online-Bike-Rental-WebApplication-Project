import {Link,  useNavigate } from "react-router-dom";
import useFetch from "../../../useFetch";;
const CbikeList = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
        height: '100vh', // Set the height as per your design
      };
    const { data, errordata, isloaded } = useFetch('http://localhost:8000/customer');
    // console.log(data);
    const navigate=useNavigate();
    const Redirectdetail=(id)=>{
        navigate('/Ccustdetail/'+id)
    }
    return (
        <section className="contact-wrapper p-5 " style={{backgroundColor:'#130e38',height:'640px'}}>
     <div className="container" >
            <div className="card mt-5" >
                <div className="card-body">
                   {/* <button type="submit"> <Link className="btn btn-success " to="/Addcust">Add New</Link>
                   </button> */}
                    <button type="submit"> <Link className="btn btn-success " to="/BikeCustomerDb">Dashboard</Link>
                   </button> 
                    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bold',fontSize:'30px'}}>Customer Listing</h5>
                    {isloaded && <div>Please Wait</div>}
                    {errordata && <div>{errordata}</div>}
                    {data &&
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <td>ID</td>
                                    <td>Vehicle No</td>
                                    <td>RC Book</td>
                                    <td>Bike Rent/hr</td>
                                    
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((item, index) => (
                                    <tr key={item.id}>
                                        <td>{index + 1}</td>
                                        <td>{item.vno}</td>
                                        <td>{item.rcbook}</td>
                                        <td>{item.bikerh}</td>
                                      
                                        {/* <td> <Link className="btn btn-primary" to={"/empdetails/" + item.id}>Details</Link></td> */}
                                        <td><button type="button" className="btn btn-outline-dark "onClick={()=>Redirectdetail(item.id)}>Details</button> 
                                     
                                        </td>
                                    </tr>
                                ))}

                            </tbody>
                        </table>
                    }
                </div>
            </div>
            </div>
            </section>
    );
}
export default CbikeList;