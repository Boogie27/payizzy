

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";




const ContainerFour = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
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
        <div className="content-slider">
            <Carousel responsive={responsive}>
                <div>Item 1</div>
                <div>Item 2</div>
                <div>Item 3</div>
                <div>Item 4</div>
            </Carousel>
        </div>
    )
}


