import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { help_img, preloader } from '../File'
import BottomHelp from './BottomHelp'
import { NavLink } from 'react-router-dom'
import HelpBanner from './HelpBanner'


const Help = ({helpCategories}) => {

    return (
        <div className="help-container">
            <HelpBanner/>
            <HelpBody helpCategories={helpCategories}/>
            <BottomHelp/>
        </div>
    )
}

export default Help



const TitleHeader = () => {
    return (
        <div className="helper main-title-header">
           <div className="title-header">
                <h3>Get all the answers  you want about payizzy</h3>
           </div>
           <div className="form">
                <div className="form-item">
                    <input type="text" placeholder="Search you terms here"/>
                    <button type="button">Search</button>
                </div>
           </div>
        </div>
    )
}





const HelpBody = ({helpCategories}) => {
    return (
        <div className="help-body-container">
            <Row className="show-grid">
                {helpCategories.map((item, index) => (<Col key={index} className="item" xs={6} sm={6} md={4} lg={3} xl={3}><HelpContent item={item}/></Col>))}
            </Row>
        </div>
    )
}




const HelpContent = ({item}) => {
    return (
        <NavLink to={`/help-content?details=${item._id}`}>
            <div className="help-content">
                <div className="image">
                    <img src={help_img(item.image)} alt="help-1"/>
                </div>
                <div className="title">
                    <h3>{item.title}</h3>
                </div>
            </div>
        </NavLink>
    )
}






