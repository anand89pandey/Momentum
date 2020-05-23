import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import WhatsApp from './WhatsApp'
import one from '../assets/img/earRings/1.JPG'
import two from '../assets/img/earRings/2.JPG'
import three from '../assets/img/earRings/3.JPG'
import four from '../assets/img/earRings/4.JPG'
import five from '../assets/img/earRings/5.jpg'
import six from '../assets/img/earRings/6.jpg'
import seven from '../assets/img/earRings/7.jpg'
import eight from '../assets/img/earRings/8.jpg'
import nine from '../assets/img/earRings/9.jpg'
import ten from '../assets/img/earRings/10.jpg'

const images = [
    one,
    two,
    three, four, five, six, seven, eight, nine, ten
];

const smallImages = [
    one,
  two,
  three, four, five, six, seven, eight, nine, ten
];

class EarRing extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        photoIndex: 0,
        isOpen: false
      };
    }
   myFunction(){
     let myArray = [];
    for (let i = 0; i < smallImages.length; i++) {
      myArray[i] = ( <MDBCol md="4">
      <figure>
        <img
          src={smallImages[i]}
          alt="Gallery"
          className="img-fluid"
          onClick={() =>
            this.setState({ photoIndex: i, isOpen: true })
          }
        />
      </figure>
    </MDBCol>
      );
    }
    return myArray;
   }
    render() {
      const { photoIndex, isOpen } = this.state;
      return (
        <div>
        <MDBContainer>
          <div className="mdb-lightbox no-margin">
            <MDBRow>
              {this.myFunction()}
            </MDBRow>
          </div>
          {isOpen && (
            <Lightbox
              mainSrc={images[photoIndex]}
              nextSrc={images[(photoIndex + 1) % images.length]}
              prevSrc={images[(photoIndex + images.length - 1) % images.length]}
              imageTitle={photoIndex + 1 + "/" + images.length}
              imageCaption={"Style No. - ER2020-" + (photoIndex +1)}
              onCloseRequest={() => this.setState({ isOpen: false })}
              onMovePrevRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + images.length - 1) % images.length
                })
              }
              onMoveNextRequest={() =>
                this.setState({
                  photoIndex: (photoIndex + 1) % images.length
                })
              }
            />
          )}
        </MDBContainer>
        <WhatsApp />
        </div>
      );
    }
  }
  
  export default EarRing;