import React from 'react' 
import onethum from '../assets/img/background_images/footwear4.jpeg'
import twothumb from '../assets/img/background_images/bag.jpeg'
import threethumb from '../assets/img/background_images/ear_rings.jpeg'
import fourthumb from '../assets/img/background_images/gifts.png'
import fivethumb from '../assets/img/background_images/masks.jpeg'

import { Link, Route, BrowserRouter as Router } from 'react-router-dom'
import WhatsApp from './WhatsApp';

function Portfolio() {
    return (
        <div>
            
            <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">We have expertise in</h3>
                </div>
                
                <div className="row">
                
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                        <Link className="portfolio-link" to={'/momentum/promod/footwear'}>
                            {/* <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1"> */}
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={onethum} alt=""/>
                                {/* </a> */}
                                </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Ladies Footwear</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                        <Link className="portfolio-link" to={'/momentum/promod/bag'}>
                            {/* <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2"> */}
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={twothumb} alt=""/>
                                {/* </a> */}
                                </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Ladies bag</div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 mb-4">
                    
                        <div className="portfolio-item">
                        <Link className="portfolio-link" to={'/momentum/promod/earRing'}>
                            {/* <a className="portfolio-link" href="#footwear"> */}
                               
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={threethumb} alt=""/>
                                {/* </a> */}
                                </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Fashion Apparel</div>
                            </div>
                            
                        </div>
                        
                    </div>
                    
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="portfolio-item">
                        <Link className="portfolio-link" to={'/momentum/promod/gift'}>
                            {/* <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4"> */}
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fourthumb} alt=""/>
                                {/* </a> */}
                                </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Handicraft and Gifts</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div className="portfolio-item">
                        <Link className="portfolio-link" to={'/momentum/promod/mask'}>
                            {/* <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5"> */}
                                <div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fivethumb} alt=""/>
                                {/* </a> */}
                                </Link>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Face Mask and PPE kits</div>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
                
            </div>
            <WhatsApp />
        </section>
       
        </div>

    )
}


export default Portfolio