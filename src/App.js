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
import { HashRouter as Router, Route } from 'react-router-dom';
import Footwear from './components/Footwear'
import Bag from './components/Bag';
import CarouselPromod from './components/CarouselPromod'
import Gift from './components/Gift'
import Landing from './components/Landing'
import EarRing from './components/EarRing';
import Mask from './components/Mask';


function App() {
  return (
    <div className="App">
<Router>
        <Menu />
         
        <Route exact path="/" component={Landing} />
        <Route exact path="/momentum/promod/portfolio" component={Portfolio} />

        <Route exact path="/momentum/promod/about" component={About} />
        {/* <Route exact path="/momentum/promod/team" component={Team} /> */}
        <Route exact path="/momentum/promod/contact" component={Contact} />
        <Route exact path="/momentum/promod/footwear" component={Footwear} />
        <Route exact path="/momentum/promod/bag" component={Bag} />
        <Route exact path="/momentum/promod/gift" component={Gift} />
        <Route exact path="/momentum/promod/earRing" component={EarRing} />
        <Route exact path="/momentum/promod/mask" component={Mask} />

        <Footer />
      </Router>
      
    </div>
  );
}

export default App;
