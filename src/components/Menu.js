import React from 'react'
import promodindia from '../assets/logo/newPromodIndia.PNG'
import { Link,NavLink } from 'react-router-dom';


function Menu() {
    return (
        <div>
            <nav className="navbar navbar-default  navbar-expand-lg navbar-dark bg-dark" id="mainNav">
                <div className="container">
                    <div className="navbar-header">
                        <Link className="navbar-brand text-white text-lg brand-text" to="/">
                        </Link>
                    </div>
                    <Link className="navbar-brand js-scroll-trigger" to="/"><img src={promodindia}/></Link><button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">Menu<i className="fas fa-bars ml-1"></i></button>

                    <div className="collapse navbar-collapse" id="navbarResponsive">
                        <ul className="navbar-nav text-uppercase ml-auto" data-target=".navbar-collapse" data-toggle="collapse">
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/">Home</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/momentum/promod/portfolio">Portfolio</Link></li>
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/momentum/promod/about">About</Link></li>
                            {/* <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/momentum/promod/team">Team</Link></li> */}
                            <li className="nav-item"><Link className="nav-link js-scroll-trigger" to="/momentum/promod/contact">Contact</Link></li>
                            <li>

                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
        </div>

    )
}

export default Menu


