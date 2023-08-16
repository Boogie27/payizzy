

import {  blog_img, app_image } from '../File'
import { NavLink } from 'react-router-dom'



const ContactBanner  = () => {

    return (
        <div className="blog-banner">
            <div className="blog-banner-content">
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    )
}



export default ContactBanner




const LeftSide = () => {
    return (
        <div className="left-side">
            <div className="title-header">
                <h3>Join the tribe <br/> be yourself.</h3>
            </div>
            <div className="body">
                <p>
                    We understand that managing your finances can <br/>
                    be a daunting task. That’s why we’re committed to <br/>
                    providing you with guidance.
                </p>
            </div>
        </div>
    )
}




const RightSide = () => {
    return (
        <div className="right-side">
            <div className="banner-img">
                <img src={blog_img('2.png')} alt="banner-1"/>
            </div>
        </div>
    )
}






