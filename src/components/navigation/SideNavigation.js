import {  logo } from '../File'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars
} from '@fortawesome/free-solid-svg-icons'




const SideNavigation = ({sideNav, sections, scrollToSection, sideNavToggle}) => {
    return (
        <div className={`side-navigation ${sideNav && 'active'}`}>
            <div onClick={() => sideNavToggle(false)} className="dark-skin"></div>
            <div className="side-nav-container">
                <SideNavHeader  sideNavToggle={sideNavToggle}/>
                <SideNavLinks sections={sections} sideNavToggle={sideNavToggle} scrollToSection={scrollToSection}/>
            </div>
        </div>
    )
}




export default SideNavigation






const SideNavHeader = ({sideNavToggle}) => {
    return (
        <div className="side-nav-header">
            <div className="side-nav-img">
                <img src={logo('6.jpg')} alt="side-nav"/>
            </div>
            <div className="side-nav-icon">
                <FontAwesomeIcon  onClick={() => sideNavToggle(false)} className="icon" icon={faBars} /> 
            </div>
        </div>
    )
}







const SideNavLinks = ({sections, sideNavToggle, scrollToSection}) => {
    return (
        <div className="side-nav-links">
            <ul>
                <li onClick={() => scrollToSection(sections.whoWeAre)}><NavLink to="/">Who we are</NavLink></li>
                <li onClick={() => scrollToSection(sections.integrations)}><NavLink to="/">Integrations</NavLink></li>
                <li onClick={() => sideNavToggle(false, 'scroll')}><NavLink to="/blog">Blog</NavLink></li>
                <li onClick={() => sideNavToggle(false, 'scroll')}><NavLink to="/help">Help</NavLink></li>
                <li onClick={() => sideNavToggle(false, 'scroll')}><NavLink to="/contact-us">Contact Us</NavLink></li>
                <li onClick={() => sideNavToggle(false, 'scroll')}><NavLink to="/">Register</NavLink></li>
                <li onClick={() => sideNavToggle(false, 'scroll')}><NavLink to="/">Login</NavLink></li>
            </ul>
        </div>
    )
}


