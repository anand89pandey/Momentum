import React, { Component } from 'react'
import '.././App.css';
import Header from './Header'
import Portfolio from './Portfolio'
import About from './About'
import Team from './Team'
import Contact from './Contact'
import CarouselPromod from './CarouselPromod'

class Landing extends Component {
    render() {
        return (
            <div>
                 
                 <CarouselPromod/>
                
                <Portfolio/>
                <About/>
                
                <Contact/>
            </div>
        )
    }
}

export default Landing