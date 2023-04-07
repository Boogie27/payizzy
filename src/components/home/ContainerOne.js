import React, { useRef, useState } from 'react';
import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faFacebookF,
    faTwitter,
    faInstagram,
    faWhatsapp
 } from '@fortawesome/free-brands-svg-icons'


const ContainerOne = () => {
    const ContainerOneRef = useRef()
    const div = ContainerOneRef.current
    const [state, setState] = useState(false)

    
      // scroll window event
  const windowsScrollEvent = () => {
    const handleScroll = event => {
      let pageScroll = window.scrollY
      if(div !== undefined){
            const { offsetTop } = div
            if(pageScroll >= (offsetTop - 300)){
                setState(true)
            }else{
                setState(false)
            }
      }

    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  windowsScrollEvent()

    return (
        <div ref={ContainerOneRef} className="container-one">
            <LeftSide/>
            <RightSide state={state}/>
        </div>
    )
}




export default ContainerOne












const LeftSide = () => {
    return (
        <div className="left-side">
            <img src={app_image('12.png')} className="image" alt="banner-1"/>
            <img src={app_image('9.svg')} className="icon icon-1" alt="banner-2"/>
            <img src={app_image('10.svg')} className="icon icon-2" alt="banner-3"/>
            <img src={app_image('1.svg')} className="icon icon-3" alt="banner-4"/>
            <img src={app_image('32.svg')} className="icon icon-4" alt="banner-5"/>
        </div>
    )
}











const RightSide = ({state}) => {
    return (
        <div className={`right-side ${state && 'active'}`}>
            <div className="right-inner">
                <div className="title-header">
                    <h3>Who are we</h3>
                </div>
                <div className="body">
                    <p>
                        We are the new face of the financial Industry, we develop technologies 
                        and integrate them in accordance with every infrastructue. 
                        We are at you service with 24/7 support team.
                    </p>
                    <ul>
                        <li>
                            <div className="item item_0 active">
                                <NavLink to="/">
                                    <FontAwesomeIcon   className="icon" icon={faFacebookF} /> 
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className="item item_1 active">
                                <NavLink to="/">
                                    <FontAwesomeIcon   className="icon" icon={faTwitter} /> 
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className="item item_2 active">
                                <NavLink to="/">
                                    <FontAwesomeIcon   className="icon" icon={faInstagram} /> 
                                </NavLink>
                            </div>
                        </li>
                        <li>
                            <div className="item item_3 active">
                                <NavLink to="/">
                                    <FontAwesomeIcon   className="icon" icon={faWhatsapp} /> 
                                </NavLink>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}