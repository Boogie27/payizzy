import {  blog_img, user_img } from '../File'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom'






const Reviews = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 993 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 992, min: 568 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 567, min: 0 },
          items: 1
        }
      };


    return (
        <div style={{ backgroundImage: `url("${blog_img('1.png')}")`}} className="home-reviews-container">
           <div className="home-reviews-inner">
                <div className="title-header">
                    <h3>You’re in good <br/> hands</h3>
                </div>
                <div className="slider-frame">
                    <Carousel 
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    responsive={responsive}>
                        <SliderContent/>
                        <SliderContent/>
                        <SliderContent/>
                        <SliderContent/>
                        <SliderContent/>
                        <SliderContent/>
                        <SliderContent/>
                    </Carousel>
                </div>
           </div>
        </div>
    )
}

export default Reviews




const SliderContent = () => {
    return (
        <div className="slide-item">
            <div className="title-header">
                <h3>“ 
                    One of the best financial app so far 
                <br/>”</h3>
            </div>
            <div className="body">
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae neque faucibus 
                    dui viverra ornare lobortis elementum sit. Risus placerat leo porttitor interdum
                     cras sit. Pretium fusce in vitae sodales ipsum diam. Lectus aliquam imperdiet convallis luctus euismod 
                    volutpat sed amet.Feugiat vitae, purus id mattis eu risus habitasse. 
                </p>
            </div>
            <div className="user-profile">
                <div className="image">
                    <img src={user_img('4.png')} className="banner-bg" alt="banner-1"/>
                </div>
                <div className="detail">
                    <ul>
                        <li className="name">Kolade David</li>
                        <li className="location">Lagos, Nigeria</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}