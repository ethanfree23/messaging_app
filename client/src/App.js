import React from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';

import Header from './components/Header.js'
import HomePage from './pages/HomePage.js'
import AboutPage from './pages/AboutPage.js'
import ContactPage from './pages/ContactPage.js'
import Footer from './components/Footer.js'

const App = () => {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
