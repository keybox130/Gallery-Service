import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Images from './Images.jsx';
import GalleryModal from './GalleryModal.jsx';

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
  }

  // Invokes getStay with hardcoded stay
  componentDidMount() {
    this.getStay(99);
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

  toggleModal(e) {
    const { galleryShown } = this.state;
    const { id } = e.target;
    this.setState({
      galleryShown: !galleryShown,
      imageChosen: id,
    });
  }

  render() {
    // destructure state properties
    const { imageChosen, stay, galleryShown } = this.state;
    // If state.stay is true proceed with rendering header component, else show loading.
    const header = stay ? <Header stay={stay} /> : <h1>Loading...</h1>;
    // If state.stay is true proceed with rendering images component, else show loading.
    const images = stay ? <Images toggleMod={this.toggleModal} photos={stay.photos} />
      : <h1>Loading Images...</h1>;
    // If state.show is true render GalleryModal, else: Empty Div.
    const gallerymodal = galleryShown
      ? (<GalleryModal photos={stay.photos} imageSelected={imageChosen} />)
      : <div />;
    return (
      <>
        <HeaderImg />
        <Master>
          <div>{header}</div>
          <div>{images}</div>
        </Master>
        <GalleryModalDiv>{gallerymodal}</GalleryModalDiv>
      </>
    );
  }
}

export default App;
