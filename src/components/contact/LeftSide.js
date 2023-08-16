import {  contact_img } from '../File'







const LeftSide = () => {
    return (
        <div className="left-side">
            <div className="title-header">
                <h3>Let’s Start the Conversation</h3>
            </div>
            <div className="image">
                <img src={contact_img('1.png')} alt="contact-1"/>
            </div>
        </div>
    )
}



export default LeftSide