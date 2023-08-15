import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'



const Banner = ({bannerImage}) => {
    return (
        <div className="home-banner-container">
            <div className="inner-banner">
                <BannerLeft bannerImage={bannerImage}/>
                <BannerRight bannerImage={bannerImage}/>
            </div>
        </div>
    )
}

export default Banner







const BannerRight = ({bannerImage}) => {
    return (
        <div className="right">
            <Image bannerImage={bannerImage}/>
        </div>
    )
}



const Image = ({bannerImage}) => {
    const img = bannerImage.banner_img ? bannerImage.banner_img : 'home_banner_default.png'
    return (
        <div className="image">
            <img src={app_image(img)} alt="banner-right"/>
        </div>
    )
}



const BannerLeft = (bannerImage) => {
    return (
        <div className="left">
            <Description bannerImage={bannerImage}/>
            <Button/>
        </div>
    )
}





const Description = ({bannerImage}) => {
    return (
        <div className="description">
            <div className="title-header">
                <h3>Safe, fast and Uninterrupted Payment!</h3>
            </div>
            <div className="image">
                <Image bannerImage={bannerImage}/>
            </div>
            <div className="body">
                <p>We follow the developing technologies  and 
                    integrate them in accordance with every 
                    infrastructue. We are at you service with 
                    24/7 support team. 
                </p>
            </div>
        </div>
    )
}





const Button = () => {
    return (
        <div className="button">
            <NavLink to="/" className="app-link">
                <span>Get the app</span>
                <img src={app_image('arrow-1.svg')}  className="icon" alt="arrow-right"/>
            </NavLink>
        </div>
    )
}

