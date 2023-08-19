import React from 'react'

import Slider from "react-slick";
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import AboutBanner from '../components/AboutBanner';

function About() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        responsive: [
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          }
        ]
      };
  return (
    <div className='about-page'>
     <SiteHeader></SiteHeader>
    
     <div className='wrapper'>
     <AboutBanner></AboutBanner>
     <div className='slider-block hidden-ssm'>
        <div className='container-fluid'>
            <div className='slider'>
            <Slider {...settings}>
          <div>
          <p>A BUSINESS PROUDLY RUN BY A TEAM OF <span>DIVERSE WOMEN.</span></p>
          </div>
          <div>
          <p>A BUSINESS PROUDLY RUN BY A TEAM OF <span>DIVERSE WOMEN.2</span></p>
          </div>
          <div>
          <p>A BUSINESS PROUDLY RUN BY A TEAM OF <span> DIVERSE WOMEN.</span></p>
          </div>
          
        </Slider>
           
            </div>
        </div>
      </div>
     </div>
     <SiteFooter></SiteFooter>
    </div>
  )
}

export default About
