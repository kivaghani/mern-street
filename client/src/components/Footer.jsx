import React from 'react';
import { Link } from "react-router-dom";
import '../styles/Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'; 


const Footer = () => {
  return (
    <footer id="Footer" className="page-footer font-small stylish-color-dark pt-4" style={{ backgroundColor: 'white' }}>
      <div className="container text-center text-md-left">
        <div className="row">
          <div className="col-md-4 mx-auto">
            <h5 className="text-uppercase font-weight-bold mt-3 mb-4 " style={{ color: 'black' }}>About our Company</h5>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
            <p className='oko'  style={{ color: 'black' }}>Heystreet is a street food platform designed to provide comprehensive information about both vegetarian and non-vegetarian street food options. </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold" style={{ color: 'black' }}>Products</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
            <p>
              <a href="/">Home</a>
            </p>
            <p>
              <a href="/about">About</a>
            </p>
            <p>
              <a href="/menu">Menu</a>
            </p>
            <p>
              <a href="/blog">Blog</a>
            </p>
            <p>
              <a href="/gallery">Gallery</a>
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
            <h6 className="text-uppercase font-weight-bold" style={{ color: 'black' }}>Useful links</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '70px' }} />
            <p>
              <a href="/profile">Your Account</a>
            </p>
            <p>
              <a href="/citi">food catagory</a>
            </p>
            <p>
              <a href="/contact">Contact</a>
            </p>
            <p>
              <a href="/memories">Notes</a>
            </p>
          </div>
          <hr className="clearfix w-100 d-md-none" />
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
            <h6 className="text-uppercase font-weight-bold" style={{ color: 'black' }}>Contact</h6>
            <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto" style={{ width: '60px' }} />
            <p  style={{ color: 'black' }}> Ahmedabad, Gujarat</p>
            <p  style={{ color: 'black' }}>heystreet121@gmail.com</p>
            <p  style={{ color: 'black' }}> + 91 80254 55xxx</p>
          </div>
        </div>
      </div>
      <hr />
      <ul className="list-unstyled list-inline text-center py-2" style={{ backgroundColor: 'white' }}>
        <li className="list-inline-item">
          <h5 className="mb-1">Register for free</h5>
        </li>
        <li className="list-inline-item">
          <a href="/sign-up" className="btn btn-outline-danger btn-rounded">Sign up!</a>
        </li>
      </ul>
      <div className="hover-effect1">
    <ul className="list-unstyled list-inline text-center ">
      <li className="list-inline-item">
        <a href="/" title="Facebook" style={{ color: 'blue' }}><FontAwesomeIcon icon={faFacebookF} /></a>
      </li>
      <li className="list-inline-item">
        <a href="/" title="Twitter" style={{ color: '#1DA1F2' }}> <FontAwesomeIcon icon={faTwitter} /></a>
      </li>
      <li className="list-inline-item">
        <a href="https://www.instagram.com/kartik_vaghani_027" title="Instagram"  style={{ color: '#833AB4' }}><FontAwesomeIcon icon={faInstagram} /></a>
      </li>
      <li className="list-inline-item">
        <a href="/" title="Google" style={{ color: '4285F4' }}><FontAwesomeIcon icon={faGoogle} /></a>
      </li>
      <li className="list-inline-item">
        <a href="/" title="linkdin" style={{ color: 'blue' }} ><FontAwesomeIcon icon={faLinkedinIn} /></a>
      </li>
      <li className="list-inline-item">
        <a href="/" title="github" style={{ color: 'black' }}><FontAwesomeIcon icon={faGithub} /></a>
      </li>
      
    </ul>
</div>

      <div><ul className="line">
  <li><Link to="/">© 2024 <span>HeyStreet</span>. All Rights Reserved</Link></li>
  <li><Link to="/about">About Us</Link></li>
  <li><Link to="/">Terms Of Use</Link></li>
  <li><Link to="/">Privacy Policy</Link></li>
</ul></div>

    </footer>
  );
};

export default Footer;
