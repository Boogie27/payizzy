import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSortUp,
    faSortDown
 } from '@fortawesome/free-solid-svg-icons'




const Faq = ({faqItems}) => {
    const [state, setState] = useState({state: false, index: ''})

    
    const toggleItem = (index) => {
        let x = state.state === false ? true : false
        setState({state: x, index: index})
    }



    return (
        <div className="faq-container">
            <LeftSide faqItems={faqItems} state={state} toggleItem={toggleItem}/>
            <RightSide/>
        </div>
    )
}


export default Faq













const LeftSide = ({faqItems, state, toggleItem}) => {
    return (
        <div className="left-side">
            <div className="faq-item">
                <ul>
                    {
                        faqItems.map((item, index) => <FaqItems key={index} index={index} item={item} state={state} toggleItem={toggleItem}/>)
                    }
                </ul>
            </div>
        </div>
    )
}



const FaqItems = ({item, index, state, toggleItem}) => {
    const counter = index + 1
    const animate = state.index === index && state.state === true ? 'active' : ''

    return (
        <li>
            <div onClick={() => toggleItem(index)} className={`item-title ${animate}`}>
                <span>{`${counter}. ${item.title} `}</span> <FontAwesomeIcon   rotation={animate === 'active' ?  0 : 270} className="icon" icon={faSortDown} />
            </div>
            <div className={`item-body ${animate}`}>{item.text}</div>
        </li>
    )
}







const RightSide = () => {
    return (
        <div className="right-side">
            <div className="title-header">
                <h3>Frequency Asked Questions</h3>
            </div>
        </div>
    )
}