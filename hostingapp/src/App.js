// App.js
import './styles.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './components/HomePage';
import ServicePage from './components/ServicePage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
import Domains from './components/Domains';
import Hosting from './components/Hosting';
import ServiceDetailsPage from './components/ServiceDetailsPage';


const App = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services/:service" element={<ServicePage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/services/domains" element={<Domains />} />
          <Route path="/services/hosting" element={<Hosting />} />
          <Route path="/DetailsPage" element={<ServiceDetailsPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
