import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
export default function Footer() {
  return (
    <MDBFooter style={{ width:'95%',marginLeft:'2.5%',marginRight:'2.5%',marginTop: '15%',marginBottom: '1%' ,fontWeight: 'bolder',fontSize: '1.1rem', backgroundColor: '#85CDFD', boxShadow: '0 5px 15px 0 rgb(51, 54, 54)'}} className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-between align-items-center p-4 border-bottom'>
  <div className='d-lg-block'>
    <span>Get connected with us on social networks:</span>
  </div>
  <div className='d-flex'>
    <a href='https://www.instagram.com/krish_thakrar_1710/' className='me-4 text-reset'>
      <MDBIcon fab icon="instagram" />
    </a>
    <a href='https://www.linkedin.com/in/krish-thakrar-a93144236/' className='me-4 text-reset'>
      <MDBIcon fab icon="linkedin" />
    </a>
    <a href='https://github.com/mahim37/MEdMASk' className='me-4 text-reset'>
      <MDBIcon fab icon="github" />
    </a>
  </div>
</section>
      <section className='text-center text-md-start mt-5'>
  <div className='flex flex-wrap justify-center'>
    <div className='md:w-1/3 px-4 mb-4 md:mb-0'>
  <h6 className='text-uppercase fw-bold mb-2' style={{ textDecoration: 'underline' }}>Useful links</h6>
  <p>
    <a href='#!' className='text-reset'>
      <MDBIcon fas icon="circle-info" className="me-3" />
      HelpDesk
    </a>
  </p>
  <p>
    <a href='#!' className='text-reset'>
      <MDBIcon fas icon="money-bill" className="me-3" />
      Pricing
    </a>
  </p>
</div>
    <div className='md:w-1/3 px-4'>
    <h6 className='text-uppercase fw-bold mb-2' style={{ textDecoration: 'underline' }}>
  Contact
</h6>
      <p>
        <MDBIcon icon="envelope" className="me-3" />
        medmask4cloud@gmail.com
      </p>
      <p>
        <MDBIcon icon="phone" className="me-3" /> +91 8080713213
      </p>
    </div>
  </div>
</section>
<br></br>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='/'>
          MedMask.Systems
        </a>
      </div>
    </MDBFooter>
  );
}