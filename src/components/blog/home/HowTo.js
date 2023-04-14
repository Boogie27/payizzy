
import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircle,
 } from '@fortawesome/free-solid-svg-icons'
import {  blog_img, user_img, } from '../../File'





const HowTo = () => {
    return (
        <div className="how-to-container">
            <HowToContent direction="right"/>
            <HowToContent direction="left"/>
        </div>
    )
}


export default HowTo




const HowToContent = ({direction}) => {
    return (
        <Fragment>
            {
                direction === 'right' ? (
                    <div className="howto-content">
                        <LeftSide/>
                        <RightSide/>
                    </div>
                ) : (
                    <div className="howto-content">
                        <RightSide/>
                        <LeftSide/>
                    </div>
                )
            }
        </Fragment>
        
    )
}




const LeftSide = () => {
    return (
        <div className="left-side">
            <img src={blog_img('6.png')} alt="howto-1"/>
            <div className="title-header">
                <h3>virtual or physical?</h3>
            </div>
        </div>
    )
}







const RightSide = () => {
    return (
        <div className="right-side">
            <div className="">
                <RightHowToTop/>
                <RightHowToBottom/>
            </div>
        </div>
    )
}




const RightHowToTop = () => {
    return (
        <div className="right-howto-top">
            <div className="title-header">
                <NavLink to="/blog"><h3>Design</h3></NavLink>
            </div>
            <p>Which type of card is better for online transactions: virtual or physical?</p>
        </div>
    )
}



const RightHowToBottom = () => {
    return (
        <div className="right-howto-bottom">
            <div className="image">
                <img src={user_img('1.png')} alt="blog-user-1"/>
            </div>
            <div className="content">
                <ul>
                    <li className="name">John Doe</li>
                    <li className="date">
                        january 21th, 20221 
                        <span className="duration"> <FontAwesomeIcon   className="icon" icon={faCircle} /> 4 min read</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}