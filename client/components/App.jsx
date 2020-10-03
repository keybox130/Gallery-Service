import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Images from './Images.jsx';
import GalleryModal from './GalleryModal.jsx';
import ShareModal from './ShareModal.jsx';

const axios = require('axios');

const HeaderImg = styled.div`
height: 100px;
background-image: url("header.png");
background-repeat: no-repeat;
background-size: auto 100px;
`;

const Master = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const GalleryModalDiv = styled.div`
  z-index: 2;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stay: null,
      galleryShown: false,
      imageChosen: null,
    };
    this.getStay = this.getStay.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.PrevOrNextImg = this.PrevOrNextImg.bind(this);
    this.ShareModalShow = this.ShareModalShow.bind(this);
  }

  // Invokes getStay with hardcoded stay
  componentDidMount() {
    this.getStay(9);
9 }

  // Gets selected stay
  getStay(roomId) {
    axios(`/stays/${roomId}`)
      .then((response) => {
        this.setState({
          stay: response.data[0],
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  PrevOrNextImg(direction) {
    if (direction === 'Back') {
      // console.log("Back Triggered");
      this.setState(
        {
          imageChosen: this.state.imageChosen - 1,
        },
      );
      // console.log(`Back Triggered: State.imgChosen: ${this.state.imageChosen}`);
    }

    if (direction === 'Forward') {
      this.setState(
        {
          imageChosen: this.state.imageChosen + 1,
        },
      );
      // console.log(`Forward Triggered: State.imgChosen: ${this.state.imageChosen}`);
    }
  }

  toggleModal(e) {
    const { galleryShown } = this.state;
    const { id } = e.target;
    this.setState({
      galleryShown: !galleryShown,
      imageChosen: Number(id),
    });
  }

  ShareModalShow() {
    console.log("Show Share Modal invoked");
  }

  render() {
    // destructure state properties
    const { imageChosen, stay, galleryShown } = this.state;
    // If state.stay is true proceed with rendering Header component, else show loading.
    const header = stay ? <Header stay={stay} shareModelShow={this.ShareModalShow} />
      : <h1>Loading...</h1>;
    // If state.stay is true proceed with rendering Images component, else show loading.
    const images = stay ? <Images toggleMod={this.toggleModal} photos={stay.photos} />
      : <h1>Loading Images...</h1>;
    // If state.show is true render GalleryModal, else: Empty Div.
    const gallerymodal = galleryShown
      ? (
        <GalleryModal
          photos={stay.photos}
          imageSelected={imageChosen}
          toggleMod={this.toggleModal}
          prevOrNext={this.PrevOrNextImg}
        />
      )
      : <div />;

    return (
      <>
        <GalleryModalDiv>{gallerymodal}</GalleryModalDiv>
        <HeaderImg />
        <Master>
          <div>{header}</div>
          <div>{images}</div>
        </Master>
      </>
    );
  }
}

export default App;
