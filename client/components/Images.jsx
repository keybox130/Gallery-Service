import React from 'react';
import styled from 'styled-components';

const HomeImgs = styled.div`
width: 1120px;
border-radius: 12px;
`;
const HomeImg1 = styled.img`
width: 560px;
height:560px;
object-fit: cover;
`;
const HomeImg2 = styled.img`
width: 272px;
height:272px;
object-fit: cover;
`;
const HomeImg3 = styled.img`
width: 272px;
height:272px;
object-fit: cover;
`;
const HomeImg4 = styled.img`
width: 272px;
height:272px;

object-fit: cover;
`;
const HomeImg5 = styled.img`
width: 272px;
height:272px;

object-fit: cover;
`;

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HomeImgs>
        <HomeImg1 id="main" src={`${this.props.photos[0].photo_url}`} alt="Stay here" />
        <HomeImg2 id="topLeft" src={`${this.props.photos[1].photo_url}`} alt="Stay here" />
        <HomeImg3 id="topRight" src={`${this.props.photos[2].photo_url}`} alt="Stay here" />
        <HomeImg4 id="bttmLeft" src={`${this.props.photos[3].photo_url}`} alt="Stay here" />
        <HomeImg5 id="bttmRight" src={`${this.props.photos[4].photo_url}`} alt="Stay here" />
      </HomeImgs>
    );
  }
}

export default Images;
