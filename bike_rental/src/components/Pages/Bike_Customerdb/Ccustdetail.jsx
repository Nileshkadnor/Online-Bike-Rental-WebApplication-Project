import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../useFetch";
import{
    MDBContainer,
    MDBCard
}from 'mdb-react-ui-kit';
const Ccustdetail = () => {
    const { id } = useParams();
    const { data } = useFetch('http://localhost:8000/customer/' + id)
    // console.log(data);
    const navigate=useNavigate();
    const backtolist=()=>{
        navigate(-1);
    }
    const booked=()=>{
        navigate('/Customerform');
    }
    return (
        <section className="contact-wrapper p-5 " style={{backgroundColor:'#130e38',height:'640px'}}>
      <MDBContainer className=' w-50 mt-5 '>  
        <MDBCard >
        <div className="card-body ">
            {data && <div>
                <h3>  Vehicle No is : {data.vno} <i>({data.id})</i>
                </h3>
                <h4> RC Book NO : {data.rcbook}
                </h4>
                <h4> Bike Rent/Hr : {data.bikerh}</h4>
                {/* <h4> Bike Img : {data.bikeimg}</h4> */}
                <div>
                    <button className=" me-3" onClick={backtolist}>Back to Listing</button>
                    <button className=" me-3" onClick={booked}>Booked</button>
                   
                </div>
            </div>}

            </div>
        </MDBCard>
  
        </MDBContainer>

   </section>
    );
}

export default Ccustdetail;