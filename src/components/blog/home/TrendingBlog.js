
import Moment from 'moment';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircle,
 } from '@fortawesome/free-solid-svg-icons'
 import {  blog_img, user_img, } from '../../File'




const TrendingBlog = () => {
    return (
        <div className="trending-blog">
           <TitleHeader/>
           <TrandingBlogBody/>
        </div>
    )
}



export default TrendingBlog






const TitleHeader = () => {
    return (
        <div className="main-title-header">
            <h3>Trending Blog</h3>
        </div>
    )
}






const TrandingBlogBody = () => {
    return (
        <div className="trending-blog-body">
            <Row className="show-grid">
                <Col xs={12} sm={12} md={12} lg={7} xl={7}><LeftSide/></Col>
                <Col xs={12} sm={12} md={12} lg={5} xl={5}><RightSide/></Col>
            </Row>
        </div>
    )
}





const LeftSide = () => {
    return (
        <div className="left-side">
            <img src={blog_img('5.png')} alt="blog-trending-1"/>
            <div className="float-parent">
                <div className="float-content">
                    <LeftSideFloatTop/>
                    <LeftSideFloatBottom/>
                </div>
            </div>
        </div>
    )
}



const LeftSideFloatTop = () => {
    return (
        <div className="top">
            <div className="title-header">
                <NavLink to="/blog"><h3>Design</h3></NavLink>
            </div>
            <div className="text">
                <p>Young businessman and attractive</p>
            </div>
        </div>
    )
}


const LeftSideFloatBottom = () => {
    return (
        <div className="float-bottom">
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





const RightSide = () => {
    return (
        <div className="right-side-main">
            <Row className="show-grid">
                <Col xs={12} sm={12} md={6} lg={12} xl={12}><RightSideItem/></Col>
                <Col xs={12} sm={12} md={6} lg={12} xl={12}><RightSideItem/></Col>
                <Col xs={12} sm={12} md={6} lg={12} xl={12}><RightSideItem/></Col>
                <Col xs={12} sm={12} md={6} lg={12} xl={12}><RightSideItem/></Col>
            </Row>
        </div>
    )
}


const RightSideItem = () => {
    return (
        <div className="right-side">
            <img src={blog_img('5.png')} alt="blog-trending-1"/>
            <div className="float-parent">
                <div className="float-content">
                    <RightSideFloatTop/>
                    <RightSideFloatBottom/>
                </div>
            </div>
        </div>
    )
}


const RightSideFloatTop = () => {
    return (
        <div className="top">
            <div className="title-header">
                <NavLink to="/blog"><h3>Design</h3></NavLink>
            </div>
            <div className="text">
                <p>Young businessman and attractive</p>
            </div>
        </div>
    )
}



const RightSideFloatBottom = () => {
    return (
        <div className="float-bottom">
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