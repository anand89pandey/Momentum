import React from 'react'
import one from '../assets/img/team/1.jpg'
import two from '../assets/img/team/2.jpg'
import three from '../assets/img/team/3.jpg'
import kaka from '../assets/img/team/kaka.jpg'

function Team() {
    return (
        <div>
            <section className="page-section bg-light" id="team">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 className="section-subheading text-muted">It's a fun team which is passionate about what they do</h3>
                </div>
                <div className="row">
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={one} alt="" />
                            <h4>Udisha</h4>
                            <p className="text-muted">Senior Merchant</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="www.facebook.com"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={two} alt="" />
                            <h4>Promod</h4>
                            <p className="text-muted">CEO</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        <div className="team-member">
                            <img className="mx-auto rounded-circle" src={kaka} alt="" />
                            <h4>Anubhav</h4>
                            <p className="text-muted">Production Manager</p>
                            <a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-twitter"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-facebook-f"></i></a><a className="btn btn-dark btn-social mx-2" href="#!"><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-8 mx-auto text-center"><p className="large text-muted">You can contact us via phone, facebook, twitter or linkedin</p></div>
                </div>
            </div>
        </section>
        </div>
    )
}

export default Team