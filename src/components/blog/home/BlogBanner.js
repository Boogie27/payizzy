

import {  blog_img, app_image } from '../../File'
import { NavLink } from 'react-router-dom'



const BlogBanner  = () => {

    return (
        <div className="blog-banner">
            <div className="blog-banner-content">
                <LeftSide/>
                <RightSide/>
            </div>
        </div>
    )
}



export default BlogBanner




const LeftSide = () => {
    return (
        <div className="left-side">
            <div className="title-header">
                <h3>Meet the future of <br/> all payment features</h3>
            </div>
            <div className="body">
                <p>
                    We understand that managing your finances can <br/>
                    be a daunting task. That’s why we’re committed to <br/>
                    providing you with guidance.
                </p>
            </div>
            <Button/>
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






const Button = () => {
    return (
        <div className="button">
            <NavLink to="/" className="app-link">
                <span>Call us now</span>
                <img src={app_image('arrow-2.svg')} className="icon" alt="arrow-right"/>
            </NavLink>
        </div>
    )
}