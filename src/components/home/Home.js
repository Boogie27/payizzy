import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'
import Banner  from './Banner'
import Services  from './Services'
import QrCodes  from './QrCodes'
import HowItWorks from './HowItWorks'
import ContactlessPayment from './ContactlessPayment'
import Faq  from './Faq'
import Reviews  from './Reviews'
import OurServices from './OurServices'


const Home = ({animate, setNavType, fetchElementRef, bannerImage, bannerDesc, bannerTwo, toggleFqContent, faqQuestion, faqItems}) => {
    

    return (
        <div className="home-container">
            <Banner bannerImage={bannerImage}/>
            <Services/>
            <QrCodes/>
            <HowItWorks/>
            <ContactlessPayment/>
            <OurServices/>
            <Reviews/>
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






