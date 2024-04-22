  import React from 'react';
  import { Link } from "react-router-dom";
  import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
  import { faFacebookF, faTwitter, faGoogle, faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons'; 

  const Footer = () => {

    
    return (
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h5 className="text-lg font-semibold mb-4 text-center">About our Company</h5>
              <p>Heystreet is a street food platform designed to provide comprehensive information about both vegetarian and non-vegetarian street food options.</p>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-center">Features</h5>
              <ul className='text-center p-2'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/gallery">Gallery</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-center ">Useful links</h5>
              <ul className='text-center p-2'>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/memories">Memories</Link></li>
              </ul>
            </div>
            <div>
              <h5 className="text-lg font-semibold mb-4 text-center">Contact</h5>
              <ul className='text-center p-2'>
                <li>Ahmedabad, Gujarat</li>
                <li>heystreet121@gmail.com</li>
                <li>+91 9727571976</li>
              </ul>
            </div>
          </div>
          <hr className="my-8 border-gray-600" />
          <div className="flex justify-center items-center mb-8">
            <h5 className="text-lg mr-4 text-center">Register for free</h5>
            <Link to="/sign-up" className="bg-red-700 border-white text-black font-bold p-2 rounded-md hover:bg-yellow-400">Sign up!</Link>
          </div>
          <div className="flex justify-center mb-8">
            <ul className="flex space-x-4 p-2">
              <li><a href="/" title="Facebook"><FontAwesomeIcon icon={faFacebookF} className="text-blue-500" /></a></li>
              <li><a href="/" title="Twitter"><FontAwesomeIcon icon={faTwitter} className="text-blue-400" /></a></li>
              <li><a href="https://www.instagram.com/kartik_vaghani_027" title="Instagram"><FontAwesomeIcon icon={faInstagram} className="text-purple-600" /></a></li>
              <li><a href="/" title="Google"><FontAwesomeIcon icon={faGoogle} className="text-blue-500" /></a></li>
              <li><a href="/" title="LinkedIn"><FontAwesomeIcon icon={faLinkedinIn} className="text-blue-500" /></a></li>
              <li><a href="/" title="GitHub"><FontAwesomeIcon icon={faGithub} className="text-white" /></a></li>
            </ul>
          </div>
          <hr className="my-8 border-gray-600" />
          <ul className="flex justify-center space-x-4 text-gray-700">
            <li><Link to="/">© 2024 <span className="text-white">HeyStreet</span>. All Rights Reserved</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/">Terms Of Use</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
          </ul>
        </div>
      </footer>
    );
  };

  export default Footer;
