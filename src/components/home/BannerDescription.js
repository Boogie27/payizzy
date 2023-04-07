

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";



const BannerDescription = ({bannerDesc}) => {
    
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };


    return (
        <div className="banner-description">
            <Carousel 
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={5000}
                responsive={responsive}>
                {
                    bannerDesc.map((item, index) => (<SliderItem key={index} item={item}/>))
                }
            </Carousel>
        </div>
    )
}



export default BannerDescription









const SliderItem = ({item}) => {
    return (
        <div className="item">
            <div className="innter-item">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
            </div>
        </div>
    )
}