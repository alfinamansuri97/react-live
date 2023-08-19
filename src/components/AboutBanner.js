import React from 'react'
import about_banner_logo from "../assets/images/about-banner-logo.png"

function AboutBanner() {
  return (
    <div>
      <div className='about-banner'>
            <div className='container'>
                <div className='inner-banner'>
                    <div className='about-banner-logo'>
                        <i><img src={about_banner_logo} alt="logo" /></i>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AboutBanner
