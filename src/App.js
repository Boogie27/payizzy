
import React, { useState, useEffect, useRef } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/Style.css'
import { Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'

import Home from './components/home/Home'

// Static data for  development
import {  
  bannerTwoStatic,
  faqItemsStatic
} from './components/Data'






function App() {
  const navScrollEffect = useRef()
  const [sideNav, setSideNav] = useState(false)
  const [floatNav, setFloatNav] = useState(false)
  const [bannerTwo, setBannerTwo] = useState(bannerTwoStatic)
  const [faqItems, setFaqItems] = useState(faqItemsStatic)
  const [faqQuestion, setFaqQuestion] = useState(faqItems[0])
  

  // scroll window even
  const windowsScrollEvent = () => {
    const handleScroll = event => {
      let pageScroll = window.scrollY
      if(pageScroll >= 100){
        setFloatNav(true)
      }else{
        setFloatNav(false)
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }
  
  // side bar toggle
  const sideNavToggle = (state) => {
    setSideNav(state)
  }

  // toggle faq items
  const toggleFqContent = (item) => {
    setFaqQuestion(item)
  }

  
    navScrollEffect.current = windowsScrollEvent

    useEffect(() => {
      navScrollEffect.current()
    }, [])


  return (
    <div className="parent-container">
      <div className="navigation"><Navigation sideNav={sideNav} sideNavToggle={sideNavToggle} floatNav={floatNav}/></div>
        <Routes>
          <Route path="/" element={<Home bannerTwo={bannerTwo} faqItems={faqItems} faqQuestion={faqQuestion} toggleFqContent={toggleFqContent}/>}/>
        </Routes>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
