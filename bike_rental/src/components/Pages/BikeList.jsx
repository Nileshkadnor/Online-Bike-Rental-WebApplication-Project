import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFetch from "../../useFetch";
const BikeList = () => {
    // const gradientStyle = {
    //     background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
    //     height: '100vh', // Set the height as per your design
    //   };
    const { data, errordata, isloaded } = useFetch('http://localhost:8000/customer');
    const navigate=useNavigate();   
    const Redirectdetail=(id)=>{
        navigate('/Custdetail/'+id)
    }
    const FunEdit=(id)=>{
        navigate('/Editcust/'+id)
    }
    const FunRemove=((id)=>{
        if(window.confirm("Do you want to remove?")){
            fetch("http://localhost:8000/customer/"+id,
            {method:"DELETE"}).then(()=>{

                window.location.reload();

            }).catch((err)=>{
                console.log(err.message)
            })
        }

    })

    return (
        <section className="contact-wrapper p-5 " style={{backgroundColor:'#130e38',height:'640px'}}>
            <div className="container">
            <div className="card mt-5" >
                <div className="card-body">
                    <button type="submit"> <Link className="btn btn-success " to="/BikeOwnerDb">Dashboard</Link>
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
                                    {/* <td>Owner Name </td> */}
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
                                 {/* <td>{item.own}</td>   */}
               
                                {/* <td>{loggedInUser === item.own ? item.own : "Not Authorized"}</td> */}
                              {/* <td> <Link className="btn btn-primary" to={"/empdetails/" + item.id}>Details</Link></td> */}
                                        <td><button type="button" className="btn btn-outline-dark w-25" onClick={()=>{Redirectdetail(item.id)}}>Details</button> | 
                                        <button type="button" className="btn btn-outline-dark w-25" onClick={()=>{FunEdit(item.id)}}>Edit</button> |
                                        <button type="button" className="btn btn-outline-dark w-25" onClick={()=>{FunRemove(item.id)}}>Detete</button>
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
export default BikeList;