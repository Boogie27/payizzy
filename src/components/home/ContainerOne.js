import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebookF,
    faTwitter,
    faInstagram,
    faWhatsapp
 } from '@fortawesome/free-brands-svg-icons'


const ContainerOne = () => {
    return (
        <div className="container-one">
            <LeftSide/>
            <RightSide/>
        </div>
    )
}




export default ContainerOne












const LeftSide = () => {
    return (
        <div className="left-side">
            <img src={app_image('12.png')} className="image" alt="banner-1"/>
            <img src={app_image('9.svg')} className="icon icon-1" alt="banner-2"/>
            <img src={app_image('10.svg')} className="icon icon-2" alt="banner-3"/>
            <img src={app_image('1.svg')} className="icon icon-3" alt="banner-4"/>
            <img src={app_image('32.svg')} className="icon icon-4" alt="banner-5"/>
        </div>
    )
}











const RightSide = () => {
    return (
        <div className="right-side">
            <div className="right-inner">
                <div className="title-header">
                    <h3>Who are we</h3>
                </div>
                <div className="body">
                    <p>
                        We are the new face of the financial Industry, we develop technologies 
                        and integrate them in accordance with every infrastructue. 
                        We are at you service with 24/7 support team.
                    </p>
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
                        <li>
                            <NavLink to="/">
                                <FontAwesomeIcon   className="icon" icon={faWhatsapp} /> 
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}