import React, { useEffect } from 'react';
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



const Home = ({animate, setNavType, fetchElementRef, bannerImage, bannerDesc, bannerTwo, toggleFqContent, faqQuestion, faqItems}) => {
    
    useEffect(() => {
        // get pathname and set page navigatios
        const path_name = window.location.pathname
        if(path_name === '/'){
            setNavType('')
        }
    }, [setNavType])

    return (
        <div className="home-container">
            <HomeBanner bannerImage={bannerImage} bannerDesc={bannerDesc} animate={animate}/>
            <BannerDescription bannerDesc={bannerDesc}/>
            <AppIcons/>
            <ContainerOne fetchElementRef={fetchElementRef}/>
            <ContainerTwo bannerTwo={bannerTwo}/>
            <ContainerThree fetchElementRef={fetchElementRef}/>
            <ContainerFour faqItems={faqItems} toggleFqContent={toggleFqContent}/>
            <Faq fetchElementRef={fetchElementRef} faqQuestion={faqQuestion}/>
            <ContainerFive fetchElementRef={fetchElementRef}/>
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






