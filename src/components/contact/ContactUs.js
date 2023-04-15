import { NavLink } from 'react-router-dom'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import {  contact_img } from '../File'



const ContactUs = ({setNavType}) => {


    return (
        <div className="contact-us-container">
            <TitleHeader/>
            <ContactUsBody/>
            <NeedHelp/>
        </div>
    )
}


export default ContactUs



const TitleHeader = () => {
    return (
        <div className="main-title-header">
           <div className="title-header">
                <h3>Contact us</h3>
           </div>
        </div>
    )
}




const ContactUsBody = () => {
    return (
        <div className="contact-us-body">
            <Row className="show-grid">
                <Col xs={12} sm={12} md={6} lg={6} xl={6}><LeftSide/></Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}><RightSide/></Col>
            </Row>
        </div>
    )
}






const LeftSide = () => {
    return (
        <div className="left-side">
            <div className="title-header">
                <h3>Let’s Start the Conversation</h3>
            </div>
            <div className="image">
                <img src={contact_img('1.jpg')} alt="contact-1"/>
            </div>
        </div>
    )
}




const RightSide = () => {
    return (
        <div className="right-side">
            <div className="form">
                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input type="text" className="form-control error" placeholder="Type Name"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Phone</label>
                    <input type="text" className="form-control" placeholder="Type Phone Number"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Email</label>
                    <input type="text" className="form-control" placeholder="Type Email Address"/>
                </div>
                <div className="form-group">
                    <label htmlFor="">How Can We Help You?</label>
                    <textarea rows={4} cols={40}  className="form-control" placeholder="Type Description"></textarea>
                </div>
                <div className="form-group  button">
                    <button type="button">Send Message</button>
                </div>
            </div>
        </div>
    )
}





const NeedHelp = () =>{
    return (
        <div className="need-help">
            <div className="left-side">
                <p>Need help? We're always here for you.</p>
            </div>
            <div className="right-side">
                <NavLink to="/">
                    Chat with us live
                    <img src={contact_img('2.svg')} alt="need-help"/>
                </NavLink>
            </div>
        </div>
    )
}