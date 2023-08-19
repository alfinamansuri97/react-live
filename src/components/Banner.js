import React from 'react'
import { Link } from 'react-router-dom';
import linked_in from "../assets/images/linkedin.png";
import twitt from "../assets/images/twitter.png"
import mail from "../assets/images/mail.png"
import banner_logo from "../assets/images/banner-logo-1.png"
import banner_icon from "../assets/images/banner_icon.svg"
function Banner() {
  return (
    <div className="banner">
        <div className="container">
            <div className='inner-banner'>
              <i className='banner-icon'><img src={banner_icon} alt="icon" /></i>
              <div className='left-block'>
                <h1>
                GIVING <span>GLOBAL BRANDS</span> A SEAT AT THE TABLE
                </h1>
                <ul className='social-links hidden-ssm'>
                  <li><Link to="/" title="Linkedin"><img src={linked_in} alt="linkedin" /></Link> </li>
                  <li><Link to="/" title="Twitter"><img src={twitt} alt="twitter" /></Link> </li>
                  <li><Link to="/" title="Mail"><img src={mail} alt="mail" /></Link> </li>
                </ul>
              </div>
              <div className='right-block'>
                  <div className='banner-logo'>
                    <img src={banner_logo} alt="banner-logo" />
                  </div>
                  <div className='banner-btn-block'>
                  <Link to="/" className='white-btn' title="Learn more">Learn more</Link>
                  </div>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Banner
