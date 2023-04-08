import React, { useRef, useEffect } from 'react';
import {  app_image } from '../File'
import { NavLink } from 'react-router-dom'




const ContainerFive = ({fetchElementRef}) => {
    const blogRef = useRef()
    const onLoadFunctionRef = useRef()

    const onLoadFunctions = () => {
        fetchElementRef({blog: blogRef}) //fetch container offsettop
    }

    onLoadFunctionRef.current = onLoadFunctions //load funcitons after page loads
  
    useEffect(() => {
        onLoadFunctionRef.current()
    }, [])


    return (
        <div ref={blogRef} className="container-five-container">
            <LeftSide/>
            <RightSide/>
        </div>
    )
}


export default ContainerFive






const LeftSide = () => {
    return (
        <div className="left-side">
            <div className="inner-content">
                <div className="title-header">
                    <h3>Blog</h3>
                </div>
                <div className="item-body">
                    <p>Lorem ipsum dolor sit amet consectetur. Nunc ornare et lacinia.</p>
                    <img src={app_image('37.svg')} alt="blog-icon"/>
                </div>
                <div className="item-link">
                    <NavLink to="/blog">Learn more</NavLink>
                </div>
            </div>
        </div>
    )
}








const RightSide = () => {
    return (
        <div className="right-side">
            <img src={app_image('11.png')} alt="blog-icon-1"/>
        </div>
    )
}
