
import {  app_image } from '../Data'





const HomeBanner = () => {
    return (
        <div className="home-banner">
            <img src={app_image('28.png')} className="banner-main-img" alt="banner-frame"/>
            <div className="banner-content">
                <HomeBannerLeft/>
                <HomeBannerRight/>
            </div>
        </div>
    )
}



export default HomeBanner




const HomeBannerLeft = () => {
    return (
        <div className="left-side">
            <div className="slide-frame">
                <div className="frame-item">
                    <h3>
                        Safe, Fast And Uninterrupted Payment
                    </h3>
                    <p>
                        We follow the developing technologies  and integrate them in accordance with every infrastructue. 
                        We are at you service with 24/7 support team.
                    </p>
                </div>
                {/* <div className="frame-item">
                    <h3>
                        Safe, Fast And Uninterrupted Payment
                    </h3>
                    <p>
                        We follow the developing technologies  and integrate them in accordance with every infrastructue. 
                        We are at you service with 24/7 support team.
                    </p>
                </div> */}
            </div>
        </div>
    )
}






const HomeBannerRight = () => {
    return (
        <div className="right-side">
            <img src={app_image('29.png')} alt="banner-right"/>
        </div>
    )
}