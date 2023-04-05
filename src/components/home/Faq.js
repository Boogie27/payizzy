import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faSortDown
 } from '@fortawesome/free-solid-svg-icons'




const Faq = ({faqQuestion}) => {
    const [state, setState] = useState({state: false, index: ''})

    
    
    const toggleItem = (index) => {
        let x = state.state === false ? true : false
        setState({state: x, index: index})
    }



    return (
        <div className="faq-container">
            <LeftSide faqQuestion={faqQuestion} state={state} toggleItem={toggleItem}/>
            <RightSide/>
        </div>
    )
}


export default Faq













const LeftSide = ({faqQuestion, state, toggleItem}) => {
    let question = faqQuestion.question
    question = question.length > 0 ? question : null
    
    return (
        <div className="left-side">
            <div className="faq-item">
                <ul>
                    {
                        question.map((item, index) => <FaqItems key={index} index={index} item={item} state={state} toggleItem={toggleItem}/>)
                    }
                </ul>
                {/* style empty faq */}
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