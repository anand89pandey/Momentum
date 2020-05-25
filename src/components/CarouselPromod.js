import React from "react";
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBContainer } from
"mdbreact";
import sample1 from '../assets/img/carousel/banner3.png'
import sample2 from '../assets/img/carousel/banner4.png'
import sample3 from '../assets/img/carousel/banner5.png'
import { Link } from "react-router-dom";

function CarouselPromod() {
    return (
        <div>

            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner" role="listbox">
                    <div className="carousel-item active">
                        <img className="d-block img-fluid" src={sample1} alt="First slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid width:100% height:auto" src={sample2} alt="Second slide" />
                    </div>
                    <div className="carousel-item">
                        <img className="d-block img-fluid" src={sample3} alt="Third slide" />
                    </div>
                    <div className="carousel-caption d-none d-md-block">
                    <Link className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" to={'/momentum/promod/about'}>Know Us More</Link>
                        {/* <div className="masthead-subheading" color="dark">Welcome To Promod India</div> */}
                    </div> 
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>

        </div>
    )
}

export default CarouselPromod