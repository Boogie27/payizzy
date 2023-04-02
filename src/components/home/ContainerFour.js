

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom'






const ContainerFour = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 7
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 6
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

    return (
        <div className="containe-four-container">
            <MobileFaq/>
            <SliderContainer responsive={responsive}/>
        </div>
    )
}


export default ContainerFour



const MobileFaq = ({responsive}) => {
    return (
        <div className="title-header">
            <h3>Frequency Asked Questions</h3>
        </div>
    )
}



const SliderContainer = ({responsive}) => {
    return (
        <div className="content-four-slider">
            <Carousel responsive={responsive}>
                <div className="frame-item">
                    <NavLink to="/"><div className="item">What's New</div></NavLink>
                </div>
                <div className="frame-item">
                    <NavLink to="/"><div className="item">General</div></NavLink>
                </div>
                <div className="frame-item">
                    <NavLink to="/"><div className="item">Barcode & Scanning</div></NavLink>
                </div>
                <div className="frame-item">
                    <NavLink to="/"><div className="item">Checkout & Payment</div></NavLink>
                </div>
                <div className="frame-item">
                    <NavLink to="/"><div className="item">Clients</div></NavLink>
                </div>
                <div className="frame-item">
                    <NavLink to="/"><div className="item">Boost</div></NavLink>
                </div>
                <div className="frame-item">
                    <NavLink to="/"><div className="item">Online Booking</div></NavLink>
                </div>
            </Carousel>
        </div>
    )
}





