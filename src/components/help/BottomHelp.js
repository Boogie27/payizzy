
import { NavLink } from 'react-router-dom'
import {  contact_img, app_image, blog_img } from '../File'



const BottomHelp = () =>{
    return (
        <div className="page-bottom-help">
            <div style={{ backgroundImage: `url("${blog_img('1.png')}")`}} className="need-help">
                <div className="title-header">
                    <h3>
                        Open your account today <br/>
                        and experience the next <br/>
                        gen banking
                    </h3>
                </div>
                <Button/>
            </div>
        </div>
    )
}



export default BottomHelp






const Button = () => {
    return (
        <div className="button">
            <NavLink to="/contact-us" className="app-link">
                <span>Call us now</span>
                <img src={app_image('arrow-2.svg')} className="icon" alt="arrow-right"/>
            </NavLink>
        </div>
    )
}