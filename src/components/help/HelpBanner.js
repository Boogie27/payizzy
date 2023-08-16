

import {  blog_img, app_image } from '../File'
import { NavLink } from 'react-router-dom'



const HelpBanner  = () => {

    return (
        <div className="blog-banner">
            <div className="blog-banner-content">
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    )
}



export default HelpBanner




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
            <InputForm/>
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






const InputForm = () => {
    return (
        <div className="input-form-container">
            <input type="text" className="input" placeholder="Search your questions here"/>
            <button type="button">
                <img src={app_image('arrow-2.svg')} className="icon" alt="arrow-right"/>
            </button>
        </div>
    )
}