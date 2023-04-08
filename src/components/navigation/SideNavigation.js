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
                <SideNavLinks sections={sections} scrollToSection={scrollToSection}/>
            </div>
        </div>
    )
}




export default SideNavigation






const SideNavHeader = ({sideNavToggle}) => {
    return (
        <div className="side-nav-header">
            <div className="side-nav-img">
                <img src={logo('2.jpg')} alt="side-nav"/>
            </div>
            <div className="side-nav-icon">
                <FontAwesomeIcon  onClick={() => sideNavToggle(false)} className="icon" icon={faBars} /> 
            </div>
        </div>
    )
}







const SideNavLinks = ({sections, scrollToSection}) => {
    return (
        <div className="side-nav-links">
            <ul>
                <li onClick={() => scrollToSection(sections.whoWeAre)}><NavLink to="/">Who we are</NavLink></li>
                <li onClick={() => scrollToSection(sections.integrations)}><NavLink to="/">Integrations</NavLink></li>
                <li onClick={() => scrollToSection(sections.blog)}><NavLink to="/">Blog</NavLink></li>
                <li onClick={() => scrollToSection(sections.help)}><NavLink to="/">Help</NavLink></li>
                <li><NavLink to="/">Register</NavLink></li>
                <li><NavLink to="/">Login</NavLink></li>
            </ul>
        </div>
    )
}


