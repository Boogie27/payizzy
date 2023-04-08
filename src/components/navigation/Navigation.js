
import {  logo } from '../File'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars
} from '@fortawesome/free-solid-svg-icons'
import SideNavigation from './SideNavigation'
import FloatNavigation from './FloatNavigation'


const Navigation = ({sideNav, blog, help, whoWeAre, integrations, scrollToSection, floatNav, sideNavToggle}) => {
    
    return (
        <div className={`navigation-container`}>
            <SideNavigation blog={blog} help={help} whoWeAre={whoWeAre} integrations={integrations} scrollToSection={scrollToSection} sideNav={sideNav} sideNavToggle={sideNavToggle}/>
            <div className="inner-main-navi">
                <NavigationLeft/>
                <NavigationRight blog={blog} help={help} whoWeAre={whoWeAre} integrations={integrations} scrollToSection={scrollToSection} sideNavToggle={sideNavToggle} />
            </div>
            <FloatNavigation blog={blog} help={help} whoWeAre={whoWeAre} integrations={integrations} scrollToSection={scrollToSection} sideNav={sideNav} floatNav={floatNav} sideNavToggle={sideNavToggle}/>
        </div>
    )
}




export default Navigation







const NavigationLeft = () => {
    return (
        <div className="nav-left">
            <img src={logo('2.jpg')} alt="nav"/>
        </div>
    )
}




const NavigationRight = ({blog, help, whoWeAre, integrations, scrollToSection, sideNavToggle}) => {
    return (
        <div className="nav-right">
            <ul className="nav-links">
                <li onClick={() => scrollToSection(whoWeAre)}><NavLink to="/">Who we are</NavLink></li>
                <li onClick={() => scrollToSection(integrations)}><NavLink to="/">Integrations</NavLink></li>
                <li onClick={() => scrollToSection(blog)}><NavLink to="/">Blog</NavLink></li>
                <li onClick={() => scrollToSection(help)}><NavLink to="/">Help</NavLink></li>
            </ul>
            <div className="nav-icon">
                <FontAwesomeIcon  onClick={() => sideNavToggle(true)} className="icon" icon={faBars} />
            </div>
        </div>
    )
}