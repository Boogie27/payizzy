import {  app_image } from '../File'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const ContainerTwo = ({bannerTwo}) => {
    return (
        <div className="container-two">
            <div className="inner-container">
                <TitleHeader/>
                <ContentContainer bannerTwo={bannerTwo}/>
            </div>
        </div>
    )
}


export default ContainerTwo






const TitleHeader = () => {
    return (
        <div className="banner-title-header">
            <h3>We have a fast, simple, and Secure payment
                solution for you and your customers.
            </h3>
        </div>
    )
}






const ContentContainer = ({bannerTwo}) => {
    return (
        <div className="content-container">
            <Row className="show-grid">
                {
                    bannerTwo.map((item, index) => <Col key={index} className="item" xs={12} sm={6} md={4} lg={4} xl={4}><ContentItem item={item}/></Col>)
                }
            </Row>
        </div>
    )
}




const ContentItem = ({item}) => {
    return (
        <div className="content-item">
            <div className="title-header">
                <h3>{item.header}</h3>
                <p>{item.text}</p>
                <div className="content-image">
                    <img src={app_image(item.image)} alt="conatiner-two-1"/>
                </div>
            </div>
        </div>
    )
}