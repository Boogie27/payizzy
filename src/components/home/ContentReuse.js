import React, { Fragment} from 'react';
import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'



const ContentReuse = ({direction, floatItemState, image, buttonState}) => {
    return (
        <div className="qrcodes-contanier">
            <div className="qrcodes-inner desktop">
                {
                    direction === 'right' ? (
                        <Fragment>
                            <QrCodesLeft image={image} floatItemState={floatItemState}/>
                            <QrCodesRight buttonState={buttonState}/>
                        </Fragment>
                ) : (
                    <Fragment>
                        <QrCodesRight buttonState={buttonState}/>
                        <QrCodesLeft image={image} floatItemState={floatItemState} />
                    </Fragment>
                )
                }
            </div>
            <div className="qrcodes-inner mobile">
                <QrCodesLeft image={image} floatItemState={floatItemState}/>
                <QrCodesRight buttonState={buttonState}/>
            </div>
        </div>
    )
}

export default ContentReuse



const QrCodesLeft = ({floatItemState, image}) => {
    return (
        <div className="qrcodes-left">
            <div className="image">
                <img src={app_image(image)} className="image-bg" alt="image-1"/>
            </div>
            {
                floatItemState === 'true' ? (<FloatItem/>) : null
            }
        </div>
    )
}



const FloatItem = () => {
    return (
        <div className="image-float">
            <div className="qrcodes-left-inner">
                <img src={app_image('qrcode-2.png')} className="image-bg" alt="image-1"/>
                <h3>Scan & Pay</h3>
                <p>
                    We follow the developing technologies  and integrate them in accordance 
                    with every infrastructure. We are at you service with 24/7 support team.
                </p>
            </div>
        </div>
    )
}



const QrCodesRight = ({buttonState}) => {
    return (
        <div className="qrcodes-right">
            <div className="title-header">
                <h3>Why use QR Codes ?</h3>
            </div>
            <div className="body">
                QR code solutions from Payizzy help make payments safer, contact free, and more 
                efficient. No need to invest in point of sale 
                hardware, all you need is a smartphone
                and payizzy for Business to start generating QR codes.
            </div>
            {
                buttonState === "true" ? (<Button/>) : null
            }
        </div>
    )
}




const Button = () => {
    return (
        <div className="button">
            <NavLink to="/" className="app-link">
                <span>Sign up in Minutes</span>
                <img src={app_image('arrow-1.svg')} className="icon" alt="arrow-right"/>
            </NavLink>
        </div>
    )
}