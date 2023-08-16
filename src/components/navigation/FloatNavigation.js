
import {  logo } from '../File'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars
} from '@fortawesome/free-solid-svg-icons'
import SideNavigation from './SideNavigation'


const FloatNavigation = ({sideNav, sections, scrollToSection, floatNav, sideNavToggle}) => {
    return (
        <div className={`navigation-container float-navigation ${floatNav && 'active'}`}>
            <SideNavigation sideNav={sideNav} sections={sections} scrollToSection={scrollToSection} sideNavToggle={sideNavToggle}/>
            <div className="main-navi">
                <div className="inner-main-navi">
                    <NavigationLeft/>
                    <NavigationRight sections={sections} scrollToSection={scrollToSection} sideNavToggle={sideNavToggle} />
                </div>
            </div>
        </div>
    )
}




export default FloatNavigation







const NavigationLeft = () => {
    return (
        <div className="nav-left">
            <NavLink to="/"><img src={logo('6.jpg')} alt="nav"/></NavLink>
        </div>
    )
}




const NavigationRight = ({sections, scrollToSection, sideNavToggle}) => {
    return (
        <div className="nav-right">
            <ul className="nav-links">
                <li onClick={() => scrollToSection(sections.whoWeAre)}><NavLink to="/">Who we are</NavLink></li>
                <li><NavLink to="/contact-us">Contact us</NavLink></li>
                <li><NavLink to="/blog">Blog</NavLink></li>
                <li><NavLink to="/help">Help</NavLink></li>
            </ul>
            <div className="nav-icon">
                <FontAwesomeIcon  onClick={() => sideNavToggle(true)} className="icon" icon={faBars} />
            </div>
        </div>
    )
}