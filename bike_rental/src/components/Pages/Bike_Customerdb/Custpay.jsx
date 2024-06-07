import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../../../useFetch";

import Swal from "sweetalert2";
import{
    MDBContainer,
    MDBCard
}from 'mdb-react-ui-kit';
const Custpay = () => {
    const navigate=useNavigate();
    const { id } = useParams();
    const { data } = useFetch('http://localhost:8000/customer/' + id)
    const handleSucessClick = () => {
        Swal.fire({
          icon: 'success',
          title: 'Success!',
          text: 'Your action has been submitted successfully.',
        }).then(() => {
          navigate('/', );
        });
      };

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
              
            </div>}

            </div>
        </MDBCard>
  
        </MDBContainer>
        <div className="form-group">
                       
                        <button type="button" onClick={handleSucessClick}  >Submit</button>
                       
                   </div>

   </section>
    );
}

export default Custpay
