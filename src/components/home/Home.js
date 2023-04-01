import {  app_image } from '../Data'
import { NavLink } from 'react-router-dom'
import ContainerOne  from './ContainerOne'
import ContainerTwo  from './ContainerTwo'
import ContainerThree  from './ContainerThree'
import ContainerFour  from './ContainerFour'
import ContainerFive  from './ContainerFive'
import Faq  from './Faq'



const Home = ({bannerTwo, faqItems}) => {
    return (
        <div className="home-container">
            <HomeBanner/>
            <AppIcons/>
            <ContainerOne/>
            <ContainerTwo bannerTwo={bannerTwo}/>
            <ContainerThree/>
            <ContainerFour/>
            <Faq faqItems={faqItems}/>
            <ContainerFive/>
        </div>
    )
}




export default Home





const HomeBanner = () => {
    return (
        <div className="home-banner">
            <img src={app_image('28.png')} className="banner-main-img" alt="banner-frame"/>
            <div className="banner-content">
                <HomeBannerLeft/>
                <HomeBannerRight/>
            </div>
        </div>
    )
}




const HomeBannerLeft = () => {
    return (
        <div className="left-side">
            <div className="slide-frame">
                <div className="frame-item">
                    <h3>
                        Safe, Fast And Uninterrupted Payment
                    </h3>
                    <p>
                        We follow the developing technologies  and integrate them in accordance with every infrastructue. 
                        We are at you service with 24/7 support team.
                    </p>
                </div>
                {/* <div className="frame-item">
                    <h3>
                        Safe, Fast And Uninterrupted Payment
                    </h3>
                    <p>
                        We follow the developing technologies  and integrate them in accordance with every infrastructue. 
                        We are at you service with 24/7 support team.
                    </p>
                </div> */}
            </div>
        </div>
    )
}






const HomeBannerRight = () => {
    return (
        <div className="right-side">
            <img src={app_image('29.png')} alt="banner-right"/>
        </div>
    )
}






const AppIcons = () => {
    return (
        <div className="app-icon-container">
            <NavLink to="/"><img src={app_image('18.jpg')} alt="app-icon-1"/></NavLink>
            <NavLink to="/"><img src={app_image('19.jpg')} alt="app-icon-2"/></NavLink>
        </div>
    )
}






