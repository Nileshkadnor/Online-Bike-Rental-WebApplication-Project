import { useState } from "react";
import { useNavigate} from "react-router-dom";
//import useFetch from "./useFetch";

const Addcust = () => {
    // state variables
    const [id, idchange] = useState(0);
    const [vno, vnochange] = useState('');
    const [rcbook, rcbookchange] = useState('');
    const [bikerh, bikerhchange] = useState(0);
    //const [bikeimg, bikeimgchange] = useState('');
    const navigate=useNavigate();

    // functions
    const handlesubmit = (e) => {
        e.preventDefault();
        const empobj = { vno,rcbook,bikerh};
        
        // console.log(empobj);

        fetch("http://localhost:8000/customer", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(empobj)
        }).then(() => {
            //console.log("data added");
            navigate(-1);
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <div>
            <form className="container" onSubmit={handlesubmit}>
                <div className="row">
               
                    <div className="col-lg-6 offset-lg-3">
                        <h3>Add/Edit Customer</h3>
                        <div className="form-group">
                            <label>ID</label>
                            <input value={id} onChange={e => idchange(e.target.value)} disabled="disabled" className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Vehicle No</label>
                            <input value={vno} onChange={e => vnochange(e.target.value)} className="form-control" required></input>
                            {vno.length === 0 && <span className="errormessage"> Please enter the Vehicle no</span>}
                        </div>
                        <div className="form-group">
                            <label>RC Book No</label>
                            <input value={rcbook} onChange={e => rcbookchange(e.target.value)} className="form-control" required></input>
                            {rcbook.length === 0 && <span className="errormessage"> Please enter the Rc Number</span>}
                            
                        </div>
                        <div className="form-group">
                            <label>Bike Rent/Hr</label>
                            <input value={bikerh} onChange={e => bikerhchange(e.target.value)} className="form-control" ></input>
                            {bikerh.length === 0 && <span className="errormessage"> Please enter the Rent</span>}
                        </div>
                        {/* <div className="form-group">
                            <label>Bike Img</label>
                            <input value={bikeimg} onChange={e => bikeimgchange(e.target.value)} className="form-control" type='file'></input>

                        </div> */}

                        <div className="form-group">
                            <br></br>
                            <button className="btn btn-success w-25" type="submit">Submit</button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    );
}

export default Addcust;