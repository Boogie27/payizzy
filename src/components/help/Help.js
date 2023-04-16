import { NavLink } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {  contact_img, help_img } from '../File'
import BottomHelp from './BottomHelp'



const Help = () => {
    return (
        <div className="help-container">
            <TitleHeader/>
            <HelpBody/>
            <BottomHelp/>
        </div>
    )
}

export default Help



const TitleHeader = () => {
    return (
        <div className="main-title-header">
           <div className="title-header">
                <h3>Get all the answers  you want about payizzy</h3>
           </div>
           <div className="form">
                <div className="form-item">
                    <input type="text" placeholder="Search you terms here"/>
                    <button type="button">Search</button>
                </div>
           </div>
        </div>
    )
}





const HelpBody = () => {
    return (
        <div className="help-body-container">
            <Row className="show-grid">
                <Col className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent image={'1.svg'} title={'chat'}/></Col>
                <Col className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent image={'2.svg'} title={'QR Code Payment'}/></Col>
                <Col className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent image={'3.svg'} title={'Virtual Card'}/></Col>
                <Col className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent image={'1.svg'} title={'Dollar Card'}/></Col>
                <Col className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent image={'2.svg'} title={'QR Code Payment'}/></Col>
                <Col className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent image={'3.svg'} title={'Virtual Card'}/></Col>
                <Col className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent image={'1.svg'} title={'Chat'}/></Col>
                <Col className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent image={'3.svg'} title={'QR Code Payment'}/></Col>
            </Row>
        </div>
    )
}




const HelpContent = ({image, title}) => {
    return (
        <div className="help-content">
            <div className="image">
                <img src={help_img(image)} alt="help-1"/>
            </div>
            <div className="title">
                <h3>{title}</h3>
            </div>
        </div>
    )
}






