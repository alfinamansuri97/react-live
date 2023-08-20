import React from 'react'

import Slider from "react-slick";
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import AboutBanner from '../components/AboutBanner';

import team from "../assets/images/team-1.png"
import team_2 from "../assets/images/team-2.png"
import team_3 from "../assets/images/team-3.png"
import team_4 from "../assets/images/team-4.png"
import team_5 from "../assets/images/team-5.png"
import team_6 from "../assets/images/team-6.png"


function About() {
    const settings = {
        dots: false,
        infinite: true,
        aarows:false,
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
      /*team slider */
      const settings_1 = {
        dots: false,
        infinite: true,
        arrows:true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        center:true,  
        responsive: [
          {
            breakpoint: 680,
            settings: {
              slidesToShow: 2.5,
              slidesToScroll: 2.5,
            }
          },
          {
            breakpoint: 479,
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
     <div className='slider-block'>
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
      <div className='team-block'>
                <div className='container'>
            <div className='title-block'>
                <h2>MEET THE TEAM</h2>
                <p>With our hearts and headquarters in Bristol, we are powered by diversity and committed to creating a more inclusive world, one discussion at a time.</p>
            </div>
            <Slider {...settings_1} className='team-listing'>
            <div className='team-li'>
              
              <i><img src={team} alt="" /></i>
                <div className='name'>
                <h3>LISA MARIE CARTER</h3>
                <span>She/Her</span>
                </div>
                <div className='detail'>
                  <p>CEO & Founder</p>
                  <p>She/Her</p>
                </div>
                </div>
             
              <div className='team-li'>
              
                <i><img src={team_2} alt="" /></i>
                <div className='name'>
                <h3>JEMMA CHARLES</h3>
                <span>She/Her</span>
                </div>
                <div className='detail'>
                  <p>Chief Revenue Officer (CRO)</p>
                  <p>Queer Woman Business Leader</p>
                </div>
              
              </div>
              <div className='team-li'>
              
                <i><img src={team_3} alt="" /></i>
                <div className='name'>
                <h3>JEMMA CHARLES</h3>
                <span>She/Her</span>
                </div>
                <div className='detail'>
                  <p>Chief Revenue Officer (CRO)</p>
                  <p>Queer Woman Business Leader</p>
                </div>
              
              </div>
              <div className='team-li'>
              
              <i><img src={team_4} alt="" /></i>
              <div className='name'>
              <h3>JEMMA CHARLES</h3>
              <span>She/Her</span>
              </div>
              <div className='detail'>
                <p>Chief Revenue Officer (CRO)</p>
                <p>Queer Woman Business Leader</p>
              </div>
            
            </div>
           
            <div className='team-li'>
              
                <i><img src={team_5} alt="" /></i>
                <div className='name'>
                <h3>JEMMA CHARLES</h3>
                <span>She/Her</span>
                </div>
                <div className='detail'>
                  <p>Chief Revenue Officer (CRO)</p>
                  <p>Queer Woman Business Leader</p>
                </div>
              
              </div>
             
            
        
              <div className='team-li'>
          
                <i><img src={team_6} alt="" /></i>
                <div className='name'>
                <h3>JAKE SHAW</h3>
                <span>He/His</span>
                </div>
                <div className='detail'>
                  <p>Audience Acquisition Manager</p>
                 </div>
          
              </div>
 
            </Slider>
        </div>

      </div>
     </div>
     <SiteFooter></SiteFooter>
    </div>
  )
}

export default About
