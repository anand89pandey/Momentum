import React from 'react'
import { MDBContainer } from "mdbreact";

function Footer() {
    return(
        // <div>
        //     <footer className="footer py-4">
        //     <div className="container">
        //         <div className="row align-items-center">
        //             <div className="col-lg-4 text-lg-left"><h2>Created by Anand</h2></div>
        //             <div className="col-lg-4 my-3 my-lg-0">
        //                 <a className="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-twitter"></i></a><a class="btn btn-dark btn-social mx-2" href="#!"><i class="fab fa-facebook-f"></i></a><a class="btn btn-dark btn-social mx-2" href="https://www.linkedin.com/in/anand-pandey-944b7574/"><i class="fab fa-linkedin-in"></i></a>
        //             </div>
                    
        //         </div>
        //     </div>
        // </footer>
        // </div>
        <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href=""> Promod India </a>
        </MDBContainer>
      </div>
    )
}

export default Footer