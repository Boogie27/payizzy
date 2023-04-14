
import Moment from 'moment';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircle,
 } from '@fortawesome/free-solid-svg-icons'
 import {  blog_img, user_img, } from '../../File'




const FeaturedPost = ({featuredPost}) => {
    return (
        <div className="featured-post">
           <TitleHeader/>
           <FeaturedContent featuredPost={featuredPost}/>
        </div>
    )
}

export default FeaturedPost






const TitleHeader = () => {
    return (
        <div className="main-title-header">
            <h3>Most Featured  Posts.</h3>
        </div>
    )
}



const FeaturedContent = ({featuredPost}) => {
    return (
        <div className="featured-content">
            <Row className="show-grid">
                {
                    featuredPost.map((item, index) => (<Col key={index} xs={12} sm={12} md={6} lg={6} xl={6}><FeaturedItem item={item}/></Col>))
                }
            </Row>
        </div>
    )
}




const FeaturedItem = ({item}) => {
    return (
        <div className="featured-item">
            <TopItem item={item}/>
            <BottomItem item={item}/>
        </div>
    )
}


const TopItem = ({item}) => {
    return (
        <div className="top-item">
            <div className="left-side">
                <div className="title-header">
                    <h3>{item.title}</h3>
                </div>
                <div className="body">
                    <p>{item.text.substring(0, 70) + '...'}</p>
                </div>
            </div>
            <div className="right-side">
                <img src={blog_img('3.png')} alt="featured-1"/>
            </div>
        </div>
    )
}


const BottomItem = ({item}) => {
    const userImage = item.user.image.length > 0 ? item.user.image : 'avatar.png'
    const date = Moment(item.created_at).format('MMM Do, YY')

    return (
        <div className="bottom-item">
            <div className="image">
                <img src={user_img(userImage)} alt="user-1"/>
            </div>
            <div className="content">
                <ul>
                    <li className="name">{`${item.user.first_name} ${item.user.last_name}`}</li>
                    <li className="date">
                        {date} 
                        <span className="duration"> <FontAwesomeIcon   className="icon" icon={faCircle} /> {item.duration}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}