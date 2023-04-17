
import BottomHelp from './BottomHelp'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faBars,
    faThumbsUp,
    faThumbsDown
} from '@fortawesome/free-solid-svg-icons'




const HelpContent = () => {
    return (
        <div className="help-content-container">
            <TitleHeader/>
            <HelpContentBody/>
            <Support/>
            <Likes/>
            <HelpfulButton/>
            <FeaturedPost/>
            <BottomHelp/>
        </div>
    )
}

export default HelpContent




const TitleHeader = () => {
    return (
        <div className="helper main-title-header">
           <div className="title-header">
                <h3>QR code Payment</h3>
           </div>
           <div className="form">
                <div className="form-item">
                    <input type="text" placeholder="Search you terms here"/>
                    <button type="button">Search</button>
                </div>
           </div>
        </div>
    )
}





const HelpContentBody = () => {
    return (
        <div className="help-content-body">
           <div className="title-header">
                <h3>What is Payizzy App?</h3>
           </div>
            <div className="body">
                Payizzy App is a digital space where you can transact easily across 
                the world with a QR code which is useful personally and your business.
                We're always working to improve your Payizzy experience, with new time-saving, 
                feature-rich products to help you grow your web presence. We have partnered 
                with several companies to make your user experience even more agreeable and 
                comfortable. It’s only a start, and there are many more applications yet to come.
                Payizzy App is a digital space where you can transact easily across <br/><br/>
                the world with a QR code which is useful personally and your business.
                We're always working to improve your Payizzy experience, with new time-saving, 
                feature-rich products to help you grow your web presence. We have partnered 
                with several companies to make your user experience even more agreeable and 
                comfortable. It’s only a start, and there are many more applications yet to come.<br/><br/>
                Payizzy App is a digital space where you can transact easily across 
                the world with a QR code which is useful personally and your business.
                We're always working to improve your Payizzy experience, with new time-saving, 
                feature-rich products to help you grow your web presence. We have partnered 
                with several companies to make your user experience even more agreeable and 
                comfortable. It’s only a start, and there are many more applications yet to come.
            </div>
        </div>
    )
}



const Support = () => {
    return (
        <div className="support">
            If you have any questions, feel free to contact our 
            <NavLink to="/">Support Team</NavLink>
        </div>
    )
}



const Likes = () => {
    return (
        <div className="like-container">
            <div className="likes">
                <FontAwesomeIcon  className="icon" icon={faThumbsUp} />
                <span>608 Likes</span>
            </div>
            <div className="dis-likes">
                <FontAwesomeIcon  className="icon" icon={faThumbsDown} />
                <span>0</span>
            </div>
        </div>
    )
}



const HelpfulButton = () => {
    return (
        <div className="helpful-btn">
            <ul>
                <li>Was this information helpful ?</li>
                <li>
                    <button type="button" className="active">Yes</button>
                    <button type="button">No</button>
                </li>
            </ul>
        </div>
    )
}



const FeaturedPost = () => {
    return (
        <div className="help-featured-post">
            <div className="title-header">
                <h3>Featured post</h3>
            </div>
            <div className="help-fetaured-post-body">
                <ul>
                    <li>
                        <NavLink to="/help-content">
                            <FontAwesomeIcon  className="icon" icon={faBars} />
                            <span>When was Payizzy App released</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-content">
                            <FontAwesomeIcon  className="icon" icon={faBars} />
                            <span>When was Payizzy App released</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-content">
                            <FontAwesomeIcon  className="icon" icon={faBars} />
                            <span>When was Payizzy App released</span>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/help-content">
                            <FontAwesomeIcon  className="icon" icon={faBars} />
                            <span>When was Payizzy App released</span>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}