import React from 'react'
import dog from '../assets/img/dog.png'
import one from '../assets/img/about/1.jpg'
import two from '../assets/img/about/2.jpg'
import three from '../assets/img/about/3.jpg'
import four from '../assets/img/about/4.jpg'

function About() {
    return(
        <div>
            <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">We have a story</h3>
                </div>
                <ul className="timeline">
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={one} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>2009-2011</h4>
                                <h4 className="subheading">Our Humble Beginnings</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted"></p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={two} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>March 2011</h4>
                                <h4 className="subheading">An Agency is Born</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted"></p></div>
                        </div>
                    </li>
                    <li>
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={three} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>December 2012</h4>
                                <h4 className="subheading">Transition to Full Service</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted"></p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image"><img className="rounded-circle img-fluid" src={four} alt="" /></div>
                        <div className="timeline-panel">
                            <div className="timeline-heading">
                                <h4>July 2014</h4>
                                <h4 className="subheading">Phase Two Expansion</h4>
                            </div>
                            <div className="timeline-body"><p className="text-muted"></p></div>
                        </div>
                    </li>
                    <li className="timeline-inverted">
                        <div className="timeline-image">
                            <h4>Be Part<br />Of Our<br />Story!</h4>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
        </div>
    )
}


export default About