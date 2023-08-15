import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'
// import ContainerOne  from './ContainerOne'
// import ContainerTwo  from './ContainerTwo'
// import ContainerThree  from './ContainerThree'
// import ContainerFour  from './ContainerFour'
// import ContainerFive  from './ContainerFive'
// import BannerDescription  from './BannerDescription'
import Banner  from './Banner'
import Services  from './Services'
import QrCodes  from './QrCodes'
import HowItWorks from './HowItWorks'
import ContactlessPayment from './ContactlessPayment'
import Faq  from './Faq'
import OurServices from './OurServices'


const Home = ({animate, setNavType, fetchElementRef, bannerImage, bannerDesc, bannerTwo, toggleFqContent, faqQuestion, faqItems}) => {
    

    return (
        <div className="home-container">
            {/* <HomeBanner bannerImage={bannerImage} bannerDesc={bannerDesc} animate={animate}/> */}
            {/* <BannerDescription bannerDesc={bannerDesc}/> */}
            {/* <AppIcons/> */}
            {/* <ContainerOne fetchElementRef={fetchElementRef}/> */}
            {/* <ContainerTwo bannerTwo={bannerTwo}/> */}
            {/* <ContainerThree fetchElementRef={fetchElementRef}/> */}
            {/* <ContainerFour faqItems={faqItems} toggleFqContent={toggleFqContent}/> */}
            {/* <Faq fetchElementRef={fetchElementRef} faqQuestion={faqQuestion}/> */}
            {/* <ContainerFive fetchElementRef={fetchElementRef}/> */}

            <Banner bannerImage={bannerImage}/>
            <Services/>
            <QrCodes/>
            <HowItWorks/>
            <ContactlessPayment/>
            <OurServices/>
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






