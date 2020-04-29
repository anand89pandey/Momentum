import React from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'
import Team from './components/Team'
import Services from './components/Services'
import About from './components/About'
import Footer from './components/Footer'
import Menu from './components/Menu'
import Contact from './components/Contact'
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      
        <Menu />
        <Header />  
        <Portfolio />
        <About />
        <Team />
        <Contact />
        <Footer />
    </div>
  );
}

export default App;
