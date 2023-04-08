
import React, { useState, useEffect, useRef, Fragment} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/Style.css'
import { Route, Routes } from 'react-router-dom'

import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'

import Home from './components/home/Home'
import Preloader from './components/preloader/Preloader'

// Static data for  development
import {  
  bannerTwoStatic,
  faqItemsStatic,
  bannerDescStatic,
  bannerImageStatic
} from './components/Data'






function App() {
  const navScrollEffect = useRef()
  const animateEffect = useRef()
  const preloaderEffect = useRef()

  // smooth scroll state
  const [help, setHelp] = useState('')
  const [blog, setBlog] = useState('')
  const [whoWeAre, setWhoWeAre] = useState('')
  const [integrations, setIntegrations] = useState('')
 
  const [animate, setAnimate] = useState(false)
  const [sideNav, setSideNav] = useState(false)
  const [floatNav, setFloatNav] = useState(false)
  const [bannerImage, setBannerImage] = useState(bannerImageStatic)
  const [bannerTwo, setBannerTwo] = useState(bannerTwoStatic)
  const [faqItems, setFaqItems] = useState(faqItemsStatic)
  const [faqQuestion, setFaqQuestion] = useState(faqItems[0])
  const [bannerDesc, setBannerDesc] = useState(bannerDescStatic)
  const [isLoading, setIsLoading] = useState({state: true, text: 'Loading...', time: 3000})
  

  // smooth scroll to items
  const blogRef = useRef()
  const helpRef = useRef()
  const whoWeAreRef = useRef()
  const integrationsRef = useRef()

  const sections = {
      blog: blog,
      help: help,
      whoWeAre: whoWeAre,
      integrations: integrations
  }

  const scrollToSection = (element) => {
    window.scrollTo({
        top: element.current.offsetTop - 100,
        behavior: 'smooth'
    })
    sideNavToggle(false)
  }

  // page scroll effect
  const fetchElementRef = (elementRef) => {
    if(elementRef.whoWeAre){
      if(elementRef.whoWeAre.current !== undefined){
        setWhoWeAre(elementRef.whoWeAre)
      }
    }
    if(elementRef.integrations){
      if(elementRef.integrations.current !== undefined){
        setIntegrations(elementRef.integrations)
      }
    }
    if(elementRef.blog){
      if(elementRef.blog.current !== undefined){
        setBlog(elementRef.blog)
      }
    }
    if(elementRef.help){
      if(elementRef.help.current !== undefined){
        setHelp(elementRef.help)
      }
    }
  }

  // scroll window event
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
    // add preloader to faq items
  }

  
    // animate home banner
    const animateBanner = () => {
      setAnimate('popin')
      
      // set banner to pupup
      const popup = () => {
        setTimeout(() => {
          normal() 
          setAnimate('popup')
        }, 2000)
      }
      popup()

      // set banner to normal size
      const normal = () => {
        setTimeout(() => {
          setAnimate('')
        }, 500)
      }
    }


    // set loading time
    const preloader = () => {
      animateBanner()
      setTimeout(() => {
        setIsLoading({state: false})
      }, 1000)
    }
  

    animateEffect.current = animateBanner
    navScrollEffect.current = windowsScrollEvent
    preloaderEffect.current = preloader

    useEffect(() => {
      navScrollEffect.current()
      animateEffect.current()
      preloaderEffect.current()
    }, [])


  return (
    <div className="parent-container">
      {
        isLoading.state ? (
          <Preloader/>
        ) : (
          <Fragment>
            <div className="navigation"><Navigation sections={sections} scrollToSection={scrollToSection} sideNav={sideNav} sideNavToggle={sideNavToggle} floatNav={floatNav}/></div>
              <Routes>
                <Route path="/" element={<Home fetchElementRef={fetchElementRef} animate={animate} bannerImage={bannerImage} bannerDesc={bannerDesc} bannerTwo={bannerTwo} faqItems={faqItems} faqQuestion={faqQuestion} toggleFqContent={toggleFqContent}/>}/>
              </Routes>
            <div className="footer"><Footer /></div>
          </Fragment>
        )
      }
    </div>
  );
}

export default App;
