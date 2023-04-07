
import {  app_image } from '../File'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React, { useState, useEffect, Fragment } from 'react'



const HomeBanner = ({animate, bannerImage, bannerDesc}) => {
    const banner_frame = bannerImage.banner_frame

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
        {
            bannerImage.banner_frame ? (
                <BannerFrame banner_frame={banner_frame}/> ) : (<BannerFrame banner_frame={'default_banner_frame.png'}/> )
        }
            <div className="banner-content">
                <HomeBannerLeft bannerDesc={bannerDesc} responsive={responsive}/>
                <HomeBannerRight bannerImage={bannerImage} animate={animate}/>
            </div>
        </div>
    )
}



export default HomeBanner




const HomeBannerLeft = ({bannerDesc, responsive}) => {
    return (
        <div className="left-side">
            <Carousel 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                responsive={responsive}>
                {
                    bannerDesc.map((item, index) => (<SliderItem key={index} item={item}/>))
                }
            </Carousel>
        </div>
    )
}


const BannerFrame = ({banner_frame}) => {
    return(
        <img src={app_image(banner_frame)} className="banner-main-img" alt="banner-frame"/>
    )
}



const SliderItem = ({item}) => {
    return (
        <div className="item">
            <div className="innter-item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        </div>
    )
}





const HomeBannerRight = ({bannerImage, animate}) => {
    const image = bannerImage.banner_image ? bannerImage.banner_image : 'default_banner_img.png'
    return (
        <div className={`right-side ${animate}`}>
           <BannerImg image={image}/>
        </div>
    )
}




const BannerImg = ({image}) => {
    return (
        <img src={app_image(image)} alt="banner-right"/>
    )
}