import {  logo } from '../File'


const Preloader = () => {
    return (
        <div className="preloader">
            <img src={logo('logo-3.png')} alt="preloader-logo"/>
        </div>
    )
}

export default Preloader