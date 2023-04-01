
import React, { useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './components/css/Style.css'
import { Route, Routes } from 'react-router-dom'
// import {  logo } from './components/Data'

import Navigation from './components/navigation/Navigation'
import Footer from './components/footer/Footer'

import Home from './components/home/Home'


//  container two items
const bannerTwoStatic = [
  {
    header: 'Global Solution',
    image: '36.png',
    text: 'We follow the developing technologies  and integrate them in accordance with every infrastructure.'
  },
  {
    header: 'Fraud Protection',
    image: '30.png',
    text: 'We follow the developing technologies  and integrate them in accordance with every infrastructure.'
  },
  {
    header: 'Admin Tool',
    image: '36.png',
    text: 'We follow the developing technologies  and integrate them in accordance with every infrastructure.'
  }
]


// faq items
const FaqItemsStatic = [
  {
    title: 'How do i scan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae neque faucibus dui viverra ornare lobortis elementum sit. Risus placerat leo porttitor interdum cras sit. Pretium fusce in vitae sodales ipsum diam. Lectus aliquam imperdiet convallis luctus euismod volutpat sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec. sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec.'
  },
  {
    title: 'How do I fix an barcode error',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae neque faucibus dui viverra ornare lobortis elementum sit. Risus placerat leo porttitor interdum cras sit. Pretium fusce in vitae sodales ipsum diam. Lectus aliquam imperdiet convallis luctus euismod volutpat sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec. sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec.'
  },
  {
    title: 'How do i buy items',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae neque faucibus dui viverra ornare lobortis elementum sit. Risus placerat leo porttitor interdum cras sit. Pretium fusce in vitae sodales ipsum diam. Lectus aliquam imperdiet convallis luctus euismod volutpat sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec. sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec.'
  },
  {
    title: 'How do i scan',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae neque faucibus dui viverra ornare lobortis elementum sit. Risus placerat leo porttitor interdum cras sit. Pretium fusce in vitae sodales ipsum diam. Lectus aliquam imperdiet convallis luctus euismod volutpat sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec. sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec.'
  },
  {
    title: 'How do I fix an barcode error',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae neque faucibus dui viverra ornare lobortis elementum sit. Risus placerat leo porttitor interdum cras sit. Pretium fusce in vitae sodales ipsum diam. Lectus aliquam imperdiet convallis luctus euismod volutpat sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec. sed amet.Feugiat vitae, purus id mattis eu risus habitasse. Eget rhoncus ultrices turpis tortor, amet, enim. Pulvinar aliquet praesent ornare turpis ut. Sed id morbi est eu donec.'
  }
]





function App() {
  const [sideNav, setSideNav] = useState(false)
  const [bannerTwo, setBannerTwo] = useState(bannerTwoStatic)
  const [faqItems, setFaqItems] = useState(FaqItemsStatic)
  


  
  // side bar toggle
  const sideNavToggle = (state) => {
    setSideNav(state)
  }


  return (
    <div className="parent-container">
      <div className="navigation"><Navigation sideNav={sideNav} sideNavToggle={sideNavToggle}/></div>
        <Routes>
          <Route path="/" element={<Home bannerTwo={bannerTwo} faqItems={faqItems}/>}/>
        </Routes>
      <div className="footer"><Footer /></div>
    </div>
  );
}

export default App;
