import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import Images from './Images.jsx';

import styled from 'styled-components';

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
    };
    // this.getAllStays = this.getAllStays.bind(this);
    this.getStay = this.getStay.bind(this);
  }

  componentDidMount() {
    this.getStay(99);
  }

  // getAllStays() {
  //   axios.get('/stays')
  //     .then((response) => {
  //       this.setState({
  //         stay: response.data[3],
  //       });
  //     })
  //     .catch((error) => {
  //       // handle error
  //       console.log(error);
  //     });
  // }

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
    // console.log(this.state.stay);
    // If state.stay is defined proceed with header component.
    let header = this.state.stay ? <Header stay={this.state.stay} /> : <h1>Loading...</h1>;
    let images = this.state.stay ? <Images photos={this.state.stay.photos} /> :
    <h1>Loading Images...</h1>;
    return (
      <>
      <HeaderImg></HeaderImg>
      <Master>
        <div>{header}</div>
        <div>{images}</div>
      </Master>
      </>
    );
  }
}

export default App;
