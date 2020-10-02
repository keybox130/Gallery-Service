import React from 'react';
import styled from 'styled-components';

const HomeImages = styled.div`
  display:flex;
  align-items: flex-start;
  width: 1120px;
  border-radius: 20px;
  overflow:hidden;
  img:hover{
  filter: brightness(85%);
  transition: 350ms ease;
  }
`;

const HomeImg1 = styled.img`
width: 560px;
height:560px;
object-fit: cover;
margin-right: 0px;
`;
const HomeImg2 = styled.img`
width: 272px;
height:275px;
object-fit: cover;
margin-left: 10px;
margin-top:0px
margin-bottom: 5px;
`;
const HomeImg3 = styled.img`
width: 272px;
height:275px;
object-fit: cover;
margin-top:10px;
margin-left: 10px;
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
          <HomeImg1 id="0"onClick={this.props.toggleMod} src={`${this.props.photos[0].photo_url}`} alt="Stay here" />
          <LeftCol>
            <HomeImg2 id="1" onClick={this.props.toggleMod} src={`${this.props.photos[1].photo_url}`} alt="Stay here" />
            <HomeImg3 id="2" onClick={this.props.toggleMod} src={`${this.props.photos[2].photo_url}`} alt="Stay here" />
          </LeftCol>
          <RightCol>
            <HomeImg2 onClick={this.props.toggleMod} id="3" src={`${this.props.photos[3].photo_url}`} alt="Stay here" />
            <HomeImg3 id="4" onClick={this.props.toggleMod} src={`${this.props.photos[4].photo_url}`} alt="Stay here" />
          </RightCol>
        </HomeImages>
      </>
    );
  }
}

export default Images;
