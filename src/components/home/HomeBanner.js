
import {  app_image } from '../File'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect, Fragment } from 'react'



const HomeBanner = ({animate}) => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

    return (
        <div className="home-banner">
            <img src={app_image('28.png')} className="banner-main-img" alt="banner-frame"/>
            <div className="banner-content">
                <HomeBannerLeft responsive={responsive}/>
                <HomeBannerRight animate={animate}/>
            </div>
        </div>
    )
}



export default HomeBanner




const HomeBannerLeft = ({responsive}) => {
    return (
        <div className="left-side">
            <Carousel 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                responsive={responsive}>
                <div className="item">
                    <div className="innter-item">
                        <h3>
                            Safe, Fast And Uninterrupted Payment
                        </h3>
                        <p>
                            We follow the developing technologies  and integrate them in accordance with every infrastructue. 
                            We are at you service with 24/7 support team.
                        </p>
                    </div>
                </div>
            </Carousel>
        </div>
    )
}






const HomeBannerRight = ({animate}) => {
    return (
        <div className={`right-side ${animate}`}>
            <img src={app_image('29.png')} alt="banner-right"/>
        </div>
    )
}