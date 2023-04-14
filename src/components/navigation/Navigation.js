
import {  logo } from '../File'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars
} from '@fortawesome/free-solid-svg-icons'
import SideNavigation from './SideNavigation'
import FloatNavigation from './FloatNavigation'


const Navigation = ({sideNav, sections, scrollToSection, floatNav, sideNavToggle}) => {
    
    return (
        <div className={`navigation-container`}>
            <SideNavigation sections={sections} scrollToSection={scrollToSection} sideNav={sideNav} sideNavToggle={sideNavToggle}/>
            <div className="inner-main-navi">
                <NavigationLeft/>
                <NavigationRight sections={sections} scrollToSection={scrollToSection} sideNavToggle={sideNavToggle} />
            </div>
            <FloatNavigation sections={sections} scrollToSection={scrollToSection} sideNav={sideNav} floatNav={floatNav} sideNavToggle={sideNavToggle}/>
        </div>
    )
}




export default Navigation







const NavigationLeft = () => {
    return (
        <div className="nav-left">
            <NavLink to="/"><img src={logo('4.png')} alt="nav"/></NavLink>
        </div>
    )
}




const NavigationRight = ({sections, scrollToSection, sideNavToggle}) => {
    return (
        <div className="nav-right">
            <ul className="nav-links">
                <li onClick={() => scrollToSection(sections.whoWeAre)}><NavLink to="/">Who we are</NavLink></li>
                <li onClick={() => scrollToSection(sections.integrations)}><NavLink to="/">Integrations</NavLink></li>
                <li onClick={() => scrollToSection(sections.blog)}><NavLink to="/">Blog</NavLink></li>
                <li onClick={() => scrollToSection(sections.help)}><NavLink to="/">Help</NavLink></li>
            </ul>
            <div className="nav-icon">
                <FontAwesomeIcon  onClick={() => sideNavToggle(true)} className="icon" icon={faBars} />
            </div>
        </div>
    )
}