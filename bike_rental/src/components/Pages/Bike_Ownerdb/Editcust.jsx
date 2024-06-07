import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import{
    MDBContainer 
}from 'mdb-react-ui-kit';
import Swal from 'sweetalert2';

const Editcust = () => {
    const gradientStyle = {
        background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
        height: '100vh', // Set the height as per your design
      };
    const [id] = useState(0);
    const [vno, vnochange] = useState('');
    const [rcbook, rcbookchange] = useState('');
    //const [bikeimg, bikeimgchange] = useState('');
    const [bikerh, bikerhchange] = useState(0);
    const { custid } = useParams();
    const navigate = useNavigate();
    useEffect(() => {
        if (custid) { // Only fetch if custid is available (when editing)
            fetch('http://localhost:8000/customer/' + custid)
                .then((res) => res.json())
                .then((res) => {
                    console.log(res.id); // Add this line to check the fetched ID
                    vnochange(res.vno);
                    rcbookchange(res.rcbook);
                    bikerhchange(res.bikerh);
                })
                .catch((err) => {
                    console.log(err.message);
                });
        }
    }, [custid]); // Make sure to include custid in the dependency array
    
    // ...

    const handlesubmit = (e) => {
        e.preventDefault();
        const custobj = { id, vno,rcbook,bikerh };

        // console.log(empobj);

        fetch("http://localhost:8000/customer/"+ id, {
            method: "PUT",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(custobj)
        }) .then(() => {
            Swal.fire({
                icon: 'success',
                title: 'Success',
                text: 'Information updated successfully!',
                confirmButtonText: 'OK'
            }).then(() => {
                navigate(-1);
            });
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <section className="contact-wrapper p-5 " style={{backgroundColor:'#130e38',height:'640px'}}>
             <MDBContainer className=' mt-5'>
      
            <form className="container" onSubmit={handlesubmit}>
                <div className="row">
                    <div className="col-lg-6 offset-lg-3" style={{color:'white'}}>
                        <h3>Add/Edit Vehicle</h3>
                        <div className="form-group">
                            <label>ID</label>
                            <input  value={custid || id} disabled="disabled" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Vehicle No</label>
                            <input value={vno} onChange={e => vnochange(e.target.value)} className="form-control" required></input>
                            {vno.length === 0 && <span className="errormessage"> Please enter the vVehicle No</span>}
                        </div>
                        <div className="form-group">
                            <label>Rc Book </label>
                            <input value={rcbook} onChange={e => rcbookchange(e.target.value)} className="form-control" required></input>
                            {rcbook.length === 0 && <span className="errormessage"> Please enter the RC Book No</span>}
                        </div>
                        <div className="form-group">
                            <label>Bike Rent/hr</label>
                            <input value={bikerh} onChange={e => bikerhchange(e.target.value)} className="form-control" ></input>

                        </div>
                        {/* <div className="form-group">
                            <label>Bike Img</label>
                            <input value={bikeimg} onChange={e => bikeimgchange(e.target.value)} className="form-control" type='file' ></input>

                        </div> */}
                        <div className="form-group">
                            <br></br>
                            <button  type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>
        
            </MDBContainer>
          
         </section>
        
    );
}

export default Editcust;