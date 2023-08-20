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
                    <div className='story-block'>
                      <h1>OUR STORY</h1>
                      <ul>
                        <li><p>Discussion Box was born and raised in the Digital era, which saw (and still sees!) increasing demand for business expansion beyond traditional means.</p></li>
                        <li><p>Founded by serial entrepreneur and mum of 3 Lisa-Marie Carter, The Spotlight Experience aims to connect important decision-makers and leading global brands, through meaningful online discussions.</p></li>
                        <li><p>Driven by the goal to reduce unnecessary world-travel and improve accessibility in the events space, Discussion Box was built to be different.</p></li>
                      </ul>
                    </div>
                </div>
            </div>
      </div>
    </div>
  )
}

export default AboutBanner
