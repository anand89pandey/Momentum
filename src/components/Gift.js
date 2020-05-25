import React, { Component } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import Lightbox from "react-image-lightbox";
import WhatsApp from './WhatsApp'
import one from '../assets/img/gift/1.png'
import two from '../assets/img/gift/2.png'
import three from '../assets/img/gift/3.png'
import four from '../assets/img/gift/4.png'
import five from '../assets/img/gift/5.png'
import six from '../assets/img/gift/6.png'
import seven from '../assets/img/gift/7.png'
import eight from '../assets/img/gift/8.png'
import nine from '../assets/img/gift/9.png'
import ten from '../assets/img/gift/10.png'
import eleven from '../assets/img/gift/11.png'
import twelve from '../assets/img/gift/12.png'
import thirteen from '../assets/img/gift/13.png'
import fourteen from '../assets/img/gift/14.png'
import fifteen from '../assets/img/gift/15.png'
import sixteen from '../assets/img/gift/16.png'
import seventeen from '../assets/img/gift/17.png'
import eighteen from '../assets/img/gift/18.png'
import ninteen from '../assets/img/gift/19.png'
import twenty from '../assets/img/gift/20.png'
import twentyone from '../assets/img/gift/21.png'
import twentytwo from '../assets/img/gift/22.png'
import twentythree from '../assets/img/gift/23.png'
import twentyfour from '../assets/img/gift/24.png'
import twentyfive from '../assets/img/gift/25.png'
import twentysix from '../assets/img/gift/26.png'
import twentyseven from '../assets/img/gift/27.png'
import twentyeight from '../assets/img/gift/28.png'
import twentynine from '../assets/img/gift/29.png'
import thirty from '../assets/img/gift/30.png'
import thirtyone from '../assets/img/gift/31.png'
import thirtytwo from '../assets/img/gift/32.png'
import thirtythree from '../assets/img/gift/33.png'

const images = [
    one,
    two,
    three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen,
    fifteen, sixteen, seventeen, eighteen, ninteen, twenty, twentyone, twentytwo, twentythree, twentyfour,
    twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree
];

const smallImages = [
    one,
  two,
  three, four, five, six, seven, eight, nine, ten, eleven, twelve, thirteen, fourteen,
  fifteen, sixteen, seventeen, eighteen, ninteen, twenty, twentyone, twentytwo, twentythree, twentyfour,
  twentyfive, twentysix, twentyseven, twentyeight, twentynine, thirty, thirtyone, thirtytwo, thirtythree
];

class Gift extends React.Component {
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
              // imageCaption={"Style No. - HC2020-" + (photoIndex +1)}
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
  
  export default Gift;