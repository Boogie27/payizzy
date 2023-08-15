import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'
import ContentReuse from './ContentReuse'





const QrCodes = () => {
    return (
        <div className="qrcodes-main-container">
            <ContentReuse image={'qrcode-1.png'} direction={'right'} buttonState={'none'} floatItemState={'true'}/>
        </div>
    )
}

export default QrCodes
