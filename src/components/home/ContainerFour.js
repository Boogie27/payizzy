

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from 'react-router-dom'






const ContainerFour = ({faqItems, toggleFqContent}) => {
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
            <SliderContainer faqItems={faqItems} toggleFqContent={toggleFqContent} responsive={responsive}/>
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



const SliderContainer = ({responsive, faqItems, toggleFqContent}) => {
    return (
        <div className="content-four-slider">
            <Carousel responsive={responsive}>
                {
                    faqItems.map((item, index) => (
                        <div onClick={() => toggleFqContent(item)} key={index} className="frame-item">
                            <NavLink to="/"><div className="item">{item.title}</div></NavLink>
                        </div>
                    ))
                }
            </Carousel>
        </div>
    )
}





