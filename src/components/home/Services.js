import {  blog_img } from '../File'
import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'



const Services = () => {
    return (
        <div className="services-contanier">
            <BannerImage/>
            <Content/>
        </div>
    )
}

export default Services







const BannerImage = () => {
    return (
        <div className="service-bg">
            <img src={blog_img('1.png')} className="banner-bg" alt="banner-1"/>
        </div>
    )
}



const Content = () => {
    return (
        <div className="inner-services">
            <LeftService/>
            <RightService/>
        </div>
    )
}



const RightService = () => {
    return (
        <div className="right">RightService</div>
    )
}




const LeftService = () => {
    return (
        <div className="left">
            <div className="title-header">
                <h3>Browse our set of Integrated  services and offerings</h3>
            </div>
            <div className="body">
                <p>We offer a variety of tools and resources to help you manage your finances more effectively.</p>
            </div>
            <div className="button">
                <NavLink to="/" className="app-link">
                    <span>Learn More</span>
                    <img src={app_image('arrow-2.svg')} alt="arrow-right"/>
                </NavLink>
            </div>
        </div>
    )
}



