import React from 'react';
import styled from 'styled-components';
import Header from './Header.jsx';
import Images from './Images.jsx';
import GalleryModal from './GalleryModal.jsx';

const axios = require('axios');

const Master = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
`;
const HeaderImg = styled.div`
height: 100px;
background-image: url("header.png");
background-repeat: no-repeat;
background-size: auto 100px;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stay: null,
      galleryShown: false,
    };
    this.getStay = this.getStay.bind(this);
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

  render() {
    // If state.stay is true proceed with rendering header component, else show loading.
    const { stay } = this.state;
    const header = stay ? <Header stay={stay} /> : <h1>Loading...</h1>;
    const images = stay ? <Images photos={stay.photos} />
      : <h1>Loading Images...</h1>;
    return (
      <>
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
