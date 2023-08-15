import {  blog_img } from '../File'
import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { icons } from '../File'





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
        <div className="right">
            <Row className="show-grid">
                <Col className="item" xs={6} sm={6} md={6} lg={6} xl={6}><ContentItem title={'Pay with QR Code'} icon={'1.svg'}/></Col>
                <Col className="item" xs={6} sm={6} md={6} lg={6} xl={6}><ContentItem title={'Credit & Debit Cards'} icon={'2.svg'}/></Col>
                <Col className="item" xs={6} sm={6} md={6} lg={6} xl={6}><ContentItem title={'Pay with QR Code'} icon={'3.svg'}/></Col>
                <Col className="item" xs={6} sm={6} md={6} lg={6} xl={6}><ContentItem title={'Pay with QR Code'} icon={'4.svg'}/></Col>
            </Row>
        </div>
    )
}



const ContentItem = ({title, icon}) => {
    return (
        <div className="content-item">
            <div className="image">
                <img src={icons(icon)} className="icons-bg" alt="icons-1"/>
            </div>
            <div className="title-header">
                <h3>{title}</h3>
            </div>
        </div>
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
                    <img src={app_image('arrow-2.svg')} className="icon dark" alt="arrow-right"/>
                </NavLink>
            </div>
        </div>
    )
}



