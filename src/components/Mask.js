import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import WhatsApp from './WhatsApp'
import one from '../assets/img/mask/1.jpeg'
import two from '../assets/img/mask/2.jpeg'
import three from '../assets/img/mask/3.jpeg'
import four from '../assets/img/mask/4.jpeg'
import five from '../assets/img/mask/5.jpeg'
import six from '../assets/img/mask/6.jpeg'
import seven from '../assets/img/mask/7.jpeg'
import eight from '../assets/img/mask/8.jpeg'


const images = [
    one,
    two,
    three, four, five, six, seven, eight
];

const smallImages = [
    one,
  two,
  three, four, five, six, seven, eight
];

class Mask extends React.Component {
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
              imageCaption={"Style No. - PPE2020-" + (photoIndex +1)}
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
  
  export default Mask;