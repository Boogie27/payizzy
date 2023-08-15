import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';





const OurServices = () => {
    return (
        <div className="ourServices-container">
            <div className="title-header">
                <h3>
                    Our Services are designed for <br/>
                    business of all sizes
                </h3>
            </div>
            <div className="body">
                <Row className="show-grid">
                    <Col className="item" xs={12} sm={6} md={4} lg={4} xl={4}><ContentItem link={''} title={'Pay with QR Code'} image={'our-services-1.png'}/></Col>
                    <Col className="item" xs={12} sm={6} md={4} lg={4} xl={4}><ContentItem link={''} title={'Pay with QR Code'} image={'our-services-2.png'}/></Col>
                    <Col className="item" xs={12} sm={6} md={4} lg={4} xl={4}><ContentItem link={''} title={'Pay with QR Code'} image={'our-services-3.png'}/></Col>
                </Row>
            </div>
        </div>
    )
}


export default OurServices





const ContentItem = ({image, title}) => {
    return (
        <div className="content-item">
            <div className="image">
                <img src={app_image(image)} className="image-bg" alt="image-1"/>
            </div>
            <div className="title-header">
                <div className="item">
                    <span className="title">{title}</span>
                    <NavLink to="/" className="app-link">
                        <img src={app_image('arrow-1.svg')} className="icon" alt="arrow-right"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}


