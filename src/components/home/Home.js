import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'
import ContainerOne  from './ContainerOne'
import ContainerTwo  from './ContainerTwo'
import ContainerThree  from './ContainerThree'
import ContainerFour  from './ContainerFour'
import ContainerFive  from './ContainerFive'
import HomeBanner  from './HomeBanner'
import BannerDescription  from './BannerDescription'
import Faq  from './Faq'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const Home = ({bannerTwo, toggleFqContent, faqQuestion, faqItems}) => {
    return (
        <div className="home-container">
            <HomeBanner/>
            {/* <BannerDescription/> */}
            <AppIcons/>
            <ContainerOne/>
            <ContainerTwo bannerTwo={bannerTwo}/>
            <ContainerThree/>
            <ContainerFour faqItems={faqItems} toggleFqContent={toggleFqContent}/>
            <Faq faqQuestion={faqQuestion}/>
            <ContainerFive/>
        </div>
    )
}




export default Home















const AppIcons = () => {
    return (
        <div className="app-icon-container">
            <NavLink to="/"><img src={app_image('18.jpg')} alt="app-icon-1"/></NavLink>
            <NavLink to="/"><img src={app_image('19.jpg')} alt="app-icon-2"/></NavLink>
        </div>
    )
}






