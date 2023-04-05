
import { NavLink } from 'react-router-dom'
import {  app_image } from '../File'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebookF,
    faTwitter,
    faInstagram
 } from '@fortawesome/free-brands-svg-icons'




const Footer = () => {
    return (
        <div className="footer-container">
            <FooterTop/>
            <FooterBottom/>
        </div>
    )
}




export default Footer





const FooterTop = () => {
    return (
        <div className="footer-top">
            <div className="footer-links">
                <ul>
                    <li><NavLink to="/">Who we are</NavLink></li>
                    <li><NavLink to="/">FAQ</NavLink></li>
                    <li><NavLink to="/">PrivacyPolicy</NavLink></li>
                    <li><NavLink to="/">TermsOfService</NavLink></li>
                    <li><NavLink to="/">Integrations</NavLink></li>
                    <li><NavLink to="/">Contact</NavLink></li>
                </ul>
            </div>
            <div className="footer-app-img">
                <NavLink to="/">
                    <img src={app_image('13.jpg')} alt="nav"/>
                </NavLink>
                <NavLink to="/">
                    <img src={app_image('14.jpg')} alt="nav"/>
                </NavLink>
            </div>
        </div>
    )
}






const FooterBottom = () => {
    return (
        <div className="footer-bottom">
            <div className="inner-content">
                <div className="footer-left">
                    <NavLink to="/">
                        <img src={app_image('17.jpg')} alt="nav"/>
                    </NavLink>
                    <span className="at"><span>(C)</span> Copyright Payizzy 2022. All right reserved</span>
                </div>
                <div className="footer-right">
                    <ul>
                        <li>
                            <NavLink to="/">
                                <FontAwesomeIcon   className="icon" icon={faFacebookF} /> 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <FontAwesomeIcon   className="icon" icon={faTwitter} /> 
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/">
                                <FontAwesomeIcon   className="icon" icon={faInstagram} /> 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom-at">
                <span className="at"><span>(C)</span> Copyright Payizzy 2022. All right reserved</span>
            </div>
        </div>
    )
}