import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Images from './Images.jsx';
import GalleryModal from './GalleryModal.jsx';
import SaveModal from './SaveModal.jsx';

const axios = require('axios');

// const HeaderImgCenter = styled.div`
// display: flex;
// flex-direction: row;
// width: 100%;
// align-items: center;
// justify-content: center;
// `;
const HeaderImg = styled.div`
  flex-direction: row;
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
      saveModalShown: false,
      shareModalShown: false,
    };
    this.getStay = this.getStay.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.PrevOrNextImg = this.PrevOrNextImg.bind(this);
    this.SaveModalToggle = this.SaveModalToggle.bind(this);
    this.ShareModalToggle = this.ShareModalToggle.bind(this);
  }

  // Invokes getStay with hardcoded stay
  componentDidMount() {
    this.getStay(70);
  }

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

  SaveModalToggle() {
    console.log('saveModalToggle invoked');
    const { saveModalShown } = this.state;
    console.log(this.state);

    this.setState({
      saveModalShown: !saveModalShown,
    });

    // this.setState(prevState => ({ saveModalShown: !saveModalShown }));

    console.log(this.state);
  }

  ShareModalToggle() {
    console.log("Share Modal invoked");
  }

  render() {
    // destructure state properties
    const { imageChosen, stay, galleryShown, saveModalShown } = this.state;

    // If state.stay is true proceed with rendering Header component, else show loading.
    const header = stay ? <Header stay={stay} saveModalToggle={this.SaveModalToggle} />
      : <h1>Loading...</h1>;
    // If state.stay is true proceed with rendering Images component, else show loading.
    const images = stay ? <Images toggleMod={this.toggleModal} photos={stay.photos} />
      : <h1>Loading Images...</h1>;
    // If state.show is true render GalleryModal, else: Empty Div.
    const gallerymodal = (galleryShown && stay.photos)
      ? (
        <GalleryModal
          photos={stay.photos}
          imageSelected={imageChosen}
          toggleMod={this.toggleModal}
          saveModalToggle={this.SaveModalToggle}
          shareModalToggle={this.ShareModalToggle}
          prevOrNext={this.PrevOrNextImg}
        />
      )
      : <div />;
    const savemodal = saveModalShown
      ? (
        <SaveModal saveModalToggle={this.SaveModalToggle} />
      )
      : <div />;

    return (
      <>
        <>{savemodal}</>
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

// console.log("Save Modal invoked");
// const newState = Object.assign({}, this.state);
// newState.saveModalShown = !this.state.saveModalShown;
// this.setState(newState);
// console.log('State after setState:', this.state);

export default App;
