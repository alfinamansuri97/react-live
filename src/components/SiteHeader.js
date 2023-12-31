import React from 'react'
import { Link } from 'react-router-dom';
import user_icon from '../../src/assets/images/user-black.svg';
import user_icon_white from '../../src/assets/images/user-white.svg';


function SiteHeader() {
  return (
    <div>
      <header className="site-header">
        <div className='container-fluid'>
          <div className='inner-header'>
            <ul className='nav-bar'>
              <li><Link to="/" title="Home">Home</Link></li>
              <li><Link to="/about" title="About">About</Link></li>

            </ul>
            <div className='header-right-block'>
              <div className='user-block'>
                <Link to="" title="Lisa-Marie Carter" className='border-btn user-btn'>
                  <i>
                    <img src={user_icon} alt="user-icon" className='default-img' />
                    <img src={user_icon_white} alt="user-icon" className='hover-img' />
                  </i>
                  <span>Lisa-Marie Carter</span></Link></div>
              <div className='hamburger-block'>
                <div className='hamburger'>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  )
}

export default SiteHeader
