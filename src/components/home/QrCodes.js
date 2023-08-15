import {  app_image } from '../File'




const QrCodes = () => {
    return (
        <div className="qrcodes-contanier">
            <QrCodesLeft/>
            <QrCodesRight/>
        </div>
    )
}

export default QrCodes



const QrCodesLeft = () => {
    return (
        <div className="qrcodes-left">
            <div className="image">
                <img src={app_image('qrcode-1.png')} className="image-bg" alt="image-1"/>
            </div>
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
        </div>
    )
}



const QrCodesRight = () => {
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
        </div>
    )
}