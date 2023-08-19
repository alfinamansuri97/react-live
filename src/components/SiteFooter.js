import React from 'react'

import { Link } from 'react-router-dom';
import linked_in from "../assets/images/linkedin.png";
import twitt from "../assets/images/twitter.png"
import mail from "../assets/images/mail.png"


function SiteFooter() {
  return (
    <div>
      <footer className="site-footer">
          <div className='container-fluid'>
            <div className='inner-footer'>
                <ul className='footer-listing'>
                  <li><Link to="/" title="The why, how, what">The why, how, what</Link></li>
                  <li><Link to="/" title="Take your seat">Take your seat</Link></li>
                  <li><Link to="/" title="Upcoming Discussions">Upcoming Discussions</Link></li>
                  <li><Link to="/" title="Contact us">Contact us</Link></li>
                  <li className='hidden-xxs'>
                  <ul className='social-links'>
                  <li><Link to="/" title="Linkedin"><img src={linked_in} alt="linkedin" /></Link> </li>
                  <li><Link to="/" title="Twitter"><img src={twitt} alt="twitter" /></Link> </li>
                  <li><Link to="/" title="Mail"><img src={mail} alt="mail" /></Link> </li>
                  </ul>
                  </li>
                  <li><Link to="/" title="Our partners">Our partners</Link></li>
                  <li><Link to="/" title="About">About</Link></li>
                  <li><Link to="/" title="Past Events">Past Events</Link></li>
                  <li><Link to="/" title="Blog">Blog</Link></li>
                  <li><Link to="/" title="Privacy & Cookies">Privacy & Cookies</Link></li>
                  <li className='visible-xxs'>
                  <ul className='social-links'>
                  <li><Link to="/" title="Linkedin"><img src={linked_in} alt="linkedin" /></Link> </li>
                  <li><Link to="/" title="Twitter"><img src={twitt} alt="twitter" /></Link> </li>
                  <li><Link to="/" title="Mail"><img src={mail} alt="mail" /></Link> </li>
                  </ul>
                  </li>
                </ul>
            </div>
          </div>
      </footer>
    </div>
  )
}

export default SiteFooter
