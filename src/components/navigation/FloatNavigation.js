
import {  logo } from '../File'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars
} from '@fortawesome/free-solid-svg-icons'
import SideNavigation from './SideNavigation'


const FloatNavigation = ({sideNav, floatNav, sideNavToggle}) => {
    return (
        <div className={`navigation-container float-navigation ${floatNav && 'active'}`}>
            <SideNavigation sideNav={sideNav} sideNavToggle={sideNavToggle}/>
            <div className="main-navi">
                <div className="inner-main-navi">
                    <NavigationLeft/>
                    <NavigationRight sideNavToggle={sideNavToggle} />
                </div>
            </div>
        </div>
    )
}




export default FloatNavigation







const NavigationLeft = () => {
    return (
        <div className="nav-left">
            <img src={logo('2.jpg')} alt="nav"/>
        </div>
    )
}




const NavigationRight = ({sideNavToggle}) => {
    return (
        <div className="nav-right">
            <ul className="nav-links">
                <li><NavLink to="/">Who we are</NavLink></li>
                <li><NavLink to="/">Integrations</NavLink></li>
                <li><NavLink to="/">Blog</NavLink></li>
                <li><NavLink to="/">Help</NavLink></li>
            </ul>
            <div className="nav-icon">
                <FontAwesomeIcon  onClick={() => sideNavToggle(true)} className="icon" icon={faBars} />
            </div>
        </div>
    )
}