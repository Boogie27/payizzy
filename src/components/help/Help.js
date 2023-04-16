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
                <Col xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent/></Col>
                <Col xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent/></Col>
                <Col xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent/></Col>
                <Col xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent/></Col>
                <Col xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent/></Col>
                <Col xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent/></Col>
                <Col xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent/></Col>
                <Col xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent/></Col>
            </Row>
        </div>
    )
}




const HelpContent = () => {
    return (
        <div className="help-content">
            <div className="image">
                <img src={help_img('1.svg')} alt="help-1"/>
            </div>
            <div className="title">
                <h3>Payment</h3>
            </div>
        </div>
    )
}






