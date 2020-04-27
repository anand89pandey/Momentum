import React from 'react' 
import one from '../assets/img/portfolio/01-full.jpg'
import onethum from '../assets/img/portfolio/01-thumbnail.jpg'
import twothumb from '../assets/img/portfolio/02-thumbnail.jpg'
import threethumb from '../assets/img/portfolio/03-thumbnail.jpg'
import fourthumb from '../assets/img/portfolio/04-thumbnail.jpg'
import fivethumb from '../assets/img/portfolio/05-thumbnail.jpg'
import sixthumb from '../assets/img/portfolio/06-thumbnail.jpg'

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
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal1"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={onethum} alt=""
                            /></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Clothings</div>
                                <div className="portfolio-caption-subheading text-muted">(Scarfs, Kurtis)</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal2"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={twothumb} alt=""
                            /></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Ladies Excessories</div>
                                <div className="portfolio-caption-subheading text-muted">(Ear rings, jewelleries)</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal3"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={threethumb} alt=""
                            /></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Boots</div>
                                <div className="portfolio-caption-subheading text-muted">Leather boots (only for ladies)</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-lg-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal4"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fourthumb} alt=""
                            /></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Ladies Bags</div>
                                <div className="portfolio-caption-subheading text-muted">(Leather and jute)</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6 mb-4 mb-sm-0">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal5"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={fivethumb} alt=""
                            /></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Stiching</div>
                                <div className="portfolio-caption-subheading text-muted">(We take bulk orders for stiching)</div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-sm-6">
                        <div className="portfolio-item">
                            <a className="portfolio-link" data-toggle="modal" href="#portfolioModal6"
                                ><div className="portfolio-hover">
                                    <div className="portfolio-hover-content"><i className="fas fa-plus fa-3x"></i></div>
                                </div>
                                <img className="img-fluid" src={sixthumb} alt=""
                            /></a>
                            <div className="portfolio-caption">
                                <div className="portfolio-caption-heading">Gift Items</div>
                                <div className="portfolio-caption-subheading text-muted">(Photo Frames)</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </div>

    )
}


export default Portfolio