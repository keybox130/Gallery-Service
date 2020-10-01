import React from 'react';
import styled from 'styled-components';

const HomeImages = styled.div`
  display:flex;
  align-items: flex-start;
  width: 1120px;
  border-radius: 12px;
  overflow:hidden;
  img:hover{
  filter: brightness(90%);
  }
`;

const HomeImg1 = styled.img`
width: 560px;
height:560px;
object-fit: cover;
margin-right: 5px;
`;
const HomeImg2 = styled.img`
width: 272px;
height:272px;
object-fit: cover;
margin: 5px;
`;

const LeftCol = styled.div`
  display: flex;
  flex-direction: column;
`;

const RightCol = styled.div`
  display: flex;
  flex-direction: column;
`;

class Images extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <HomeImages>
          <HomeImg1 id="main" src={`${this.props.photos[0].photo_url}`} alt="Stay here" />
          <LeftCol>
            <HomeImg2 id="topLeft" src={`${this.props.photos[1].photo_url}`} alt="Stay here" />
            <HomeImg2 id="topRight" src={`${this.props.photos[2].photo_url}`} alt="Stay here" />
          </LeftCol>
          <RightCol>
            <HomeImg2 id="bttmLeft" src={`${this.props.photos[3].photo_url}`} alt="Stay here" />
            <HomeImg2 id="bttmRight" src={`${this.props.photos[4].photo_url}`} alt="Stay here" />
          </RightCol>
        </HomeImages>
      </>
    );
  }
}

export default Images;
