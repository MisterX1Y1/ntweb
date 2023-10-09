import React, { Component } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/home/Home-page';

import './App.css';
import Navigation from './components/common/navigation/Navigation-component';
import JoinusPage from './pages/common/join/join-us-page';
import TextLogo from './images/logo/TextLogo.png';
import UpcomingProjectPage from './pages/common/upcoming/upcoming-project-page';
import ProductHomePage from './pages/ecom/product/ProductHomePage';

const FooterSection = () => {
  return (
    <div className='footer-section'>
    <div className='left-section-footer'>
      <img src={TextLogo} className='footer-app-logo' alt='footer-app-logo' />
    </div>
    <div className='right-section-footer'>
    Footer
    </div>
    </div>
  );
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <Navigation />
        <div className='App-body'>
          <Routes>
            {/* Common Routes */}
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/home" element={<HomePage />} />
            <Route exact path="/shop" element={<ProductHomePage />} />

            <Route exact path="/upcoming-projects" element={<UpcomingProjectPage />} />
            

            <Route exact path="/our-mission" element={<h1>Under Construction</h1>} />
            <Route exact path="/our-story" element={<h1>Under Construction</h1>} />
            <Route exact path="/join-us" element={<JoinusPage />} />
            <Route exact path="/contact-us" element={<h1>Under Construction</h1>} />
            
            {/* Admin Only Routes */}
    
            {/* Other Routes */}
            <Route exact path="/profile-dashboard" element={<h1>Under Construction</h1>} />
            <Route exact path="*" element={<h1>Requested URL not found under this domain... </h1>} />
          </Routes>
        </div>
        <FooterSection />
      </div>
    );
  }

}

export default App;
