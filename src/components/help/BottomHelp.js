
import { NavLink } from 'react-router-dom'
import {  contact_img } from '../File'



const BottomHelp = () =>{
    return (
        <div className="page-bottom-help">
            <div className="need-help">
                <div className="left-side">
                    <p>Need help? We're always here for you.</p>
                </div>
                <div className="right-side">
                    <NavLink to="/">
                        Chat with us live
                        <img src={contact_img('2.svg')} alt="need-help"/>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}



export default BottomHelp