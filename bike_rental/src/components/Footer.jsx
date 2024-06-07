import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>
        <div>
          <a href='https://www.facebook.com' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href='https://twitter.com' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a href='https://www.google.com' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faGoogle} />
          </a>
          <a href='https://www.instagram.com' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faInstagram} />
          </a>
          <a href='https://www.linkedin.com' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href='https://github.com' className='me-4 text-reset'>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-1" /> Buyer Central </h6>
                <p> <a href='AboutUs' className='text-reset'> About</a> </p>               
                <p> <a href='#!' className='text-reset'> Buyer Tips</a> </p>
                <p> <a href='#!' className='text-reset'> Check Price</a> </p>
                <p> <a href='#!' className='text-reset'> Vehicle Finder</a> </p>
               
                <p> <a href='#!' className='text-reset'> Help</a> </p>
            
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Products</h6>
              <p> <a href='https://www.google.com/search?q=angular&oq=angular+&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIOCAEQRRgnGDsYgAQYigUyDggCEEUYJxg7GIAEGIoFMhIIAxAAGBQYgwEYhwIYsQMYgAQyBggEEEUYPDIGCAUQRRg8MgYIBhBFGDwyBggHEEUYPNIBCDQwMTZqMGo5qAIAsAIA&sourceid=chrome&ie=UTF-8' className='text-reset'> Angular</a> </p>
              <p> <a href='https://www.google.com/search?q=reactjs&oq=reactjs&gs_lcrp=EgZjaHJvbWUyDwgAEEUYORiDARixAxiABDIGCAEQRRhAMgYIAhBFGDsyBggDEEUYPDIGCAQQBRhAMgYIBRBFGDwyBggGEEUYPDIGCAcQRRg9qAIAsAIA&sourceid=chrome&ie=UTF-8!' className='text-reset'> React</a> </p>
              <p> <a href='https://www.google.com/search?q=mongodb&oq=mongodb&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIMCAEQIxgnGIAEGIoFMgYIAhAjGCcyDQgDEAAYgwEYsQMYgAQyDQgEEC4YxwEY0QMYgAQyDQgFEAAYgwEYsQMYgAQyBggGEEUYPTIGCAcQRRg90gEIMzMxOWowajmoAgCwAgA&sourceid=chrome&ie=UTF-8' className='text-reset'> MongoDB</a> </p>
              <p> <a href='#!' className='text-reset'> Node.js</a> </p>
              <p> <a href='#!' className='text-reset'> Javascript</a> </p>
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Seller Central</h6>
              <p> <a href='#!' className='text-reset'> Our Offerings </a></p>
              <p> <a href='#!' className='text-reset'> Check Price</a></p>
              <p> <a href='#!' className='text-reset'> Valuation Report</a></p>
              <p> <a href='#!' className='text-reset'> History Report </a></p>
              <p> <a href='#!' className='text-reset'>Inspection Report </a></p>            
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto  mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p> <MDBIcon icon="home" className="me-1" />NahikRoad</p>
              <p><MDBIcon icon="envelope" className="me-1" />tega@example.com </p>
              <p> <MDBIcon icon="phone" className="me-1" /> + 01 234 555 88 </p>
              <p> <MDBIcon icon="print" className="me-1" /> + 01 234 566 </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright:
        <a className='text-reset fw-bold' href='http://localhost:3000/'>
          BykeSeller.com
        </a>
      </div>
    </MDBFooter>
  );
}