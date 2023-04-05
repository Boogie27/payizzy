import {  app_image } from '../File'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faCircle,
 } from '@fortawesome/free-solid-svg-icons'


const ContainerThree = () => {
    return (
        <div className="container-three">
            <LeftSide/>
            <RightSide/>
        </div>
    )
}


export default ContainerThree








const LeftSide = () => {
    return (
        <div className="left-side">
            <div className="title-header">
                <h3>Payment Integration</h3>
            </div>
            <p>We follow the developing technologies  and integrate them in accordance with every infrastructue. 
                We are at you service with 24/7 support team.
            </p>
            <ul>
                <li><FontAwesomeIcon   className="icon" icon={faCircle} /> We follow the developing technologies  </li>
                <li><FontAwesomeIcon   className="icon" icon={faCircle} /> We follow the developing technologies  </li>
                <li><FontAwesomeIcon   className="icon" icon={faCircle} /> We follow the developing technologies  </li>
                <li><FontAwesomeIcon   className="icon" icon={faCircle} /> We follow the developing technologies  </li>
            </ul>
        </div>
    )
}




const RightSide = () => {
    return (
        <div className="right-side">
            <img src={app_image('7.svg')} alt="qr-code"/>
        </div>
    )
}