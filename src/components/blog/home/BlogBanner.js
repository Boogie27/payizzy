

import {  blog_img } from '../../File'




const BlogBanner  = () => {

    return (
        <div className="blog-banner">
            <img ref={imageRef} src={blog_img('1.png')} className="banner-bg" alt="banner-1"/>
            <div className="banner-content">
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
                <h3>Defend your account from fraudsters</h3>
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