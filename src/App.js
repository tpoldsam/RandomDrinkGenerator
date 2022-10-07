import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import About from './components/About';
import Notfound from './components/Notfound';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='*' element={<Notfound />} />
      </Routes>
    </div>
    <Footer />
    </>
  );
}

export default App;
