import React from 'react';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import SiteFooter from '../components/SiteFooter';
import SiteHeader from '../components/SiteHeader';
import linked_in_1 from "../assets/images/linkedin.png";
import twitt_1 from "../assets/images/twitter.png"
import mail_1 from "../assets/images/mail.png"

function HomePage() {
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
    <div>
      <SiteHeader></SiteHeader>
    <div className='wrapper'>
      <Banner></Banner>
      <div className='slider-block visible-ssm'>
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
      <div className='brands-block'>
        <div className='container'>
        <ul className='brands-listing'>
            <li>
                <p>Harness <Link to="/" title="inspiring digital discussions">inspiring digital discussions</Link> to drive reliable business growth.</p>
            </li>
            <li>
                <p>Harness <Link to="" title="inspiring digital discussions">inspiring digital discussions</Link> to drive reliable business growth.</p>
            </li>
            <li>
                <p>Open the door to <Link to="" title="inspiring digital discussions"> genuine relationships</Link> with C-Level executives and peers. </p>
            </li>
        </ul>
        <div className='brands-social visible-ssm'>
        <ul className='social-links'>
                  <li><Link to="/" title="Linkedin"><img src={linked_in_1} alt="linkedin" /></Link> </li>
                  <li><Link to="/" title="Twitter"><img src={twitt_1} alt="twitter" /></Link> </li>
                  <li><Link to="/" title="Mail"><img src={mail_1} alt="mail" /></Link> </li>
        </ul>
        </div>
        </div>
      </div>
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

export default HomePage
