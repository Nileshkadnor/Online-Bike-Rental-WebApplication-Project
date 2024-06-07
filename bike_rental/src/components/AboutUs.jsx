import React from 'react';
import Card from 'react-bootstrap/Card';
import sale1 from '../assets/images/sale1.jpg';
import '../components/style/AboutUs.css';
import { MDBContainer, MDBCol, MDBRow } from 'mdb-react-ui-kit';
const AboutUs = () => {
  const gradientStyle = {
    background: 'linear-gradient(to right, #ff8a00, #da1b60)', // Replace these colors with your desired gradient
    height: '100vh', // Set the height as per your design
  };
  return (

    <div className="container">
      <Card className='mt-5'>
        <MDBContainer className="p-3">
          <MDBRow>
            <MDBCol col='5' md='11'>
              <h5 className='text-left'>Sell Second-hand Bicycles</h5>
              <hr />
              <p>
                India's largest bike portal Bikes4Sale is introducing the best
                way to sell second-hand bicycles. Along with us, you can sell
                your used bicycles at a better price like never before. We have
                been here since 2007 through Bikes4Sale, and our experienced
                hands in the online classified market will surely ensure you the
                best service in the industry. The service is not just limited
                for those who are looking to sell their bicycles but also for
                those who want to buy a used bicycle at reasonable pricing.
              </p>
              <img src={sale1} alt="" height={400} width={500}  className="mx-auto d-block"/>
              <p>
                This classified marketplace also carries the same strategies
                that you enjoyed with Bikes4Sale. Our service is absolutely
                free of sale commissions, and you need not spend even a single
                penny to buy a bicycle from our website. That means we charge
                zero commissions.
              </p>
              <p>
                If you're looking to sell a used bicycle, all you have to do is
                post an ad of your bicycle with pictures on the website. If
                you're looking for a used bicycle, scroll the website to select
                the most suitable one for you.
              </p>
              <a
                href=""
                className="btn btn-outline-info"
             
                data-mdb-ripple-color="dark"
                aria-pressed="true"
              >
                Sell your Bicycle
              </a>
              <a
                href=""
                className="btn btn-outline-info"
                
                data-mdb-ripple-color="dark"
                aria-pressed="true"
              >
                Buy Second-hand Bicycle
              </a>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </Card>
    </div>
  );
};

export default AboutUs;
