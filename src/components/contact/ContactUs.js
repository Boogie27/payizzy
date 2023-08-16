import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import BottomHelp from '../help/BottomHelp'
import RightSide from './RightSide'
import LeftSide from './LeftSide'
import ContactBanner from './ContactBanner'



const ContactUs = ({setNavType}) => {


    return (
        <div className="contact-us-container">
            <ContactBanner/>
            <ContactUsBody/>
            <BottomHelp/>
        </div>
    )
}


export default ContactUs






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
















