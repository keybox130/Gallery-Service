import React from 'react';
import styled from 'styled-components';

const GalleryModalDiv = styled.div`
  background-color: white;
  display: flex;
  flex-direction: row;
  width: -webkit-fill-available
`;
const CloseButton = styled.button`
  width: 100px;
  height:35px;
  font-family: 'Montserrat', sans-serif;
  flex-direction: row;
  margin-right: 25%;
  border-radius: 5px;
`;

const GalleryImage = styled.img`
  height 800px;
  flex-direction: row;

`;

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { photos } = this.props;
    const { toggleMod, imageSelected } = this.props;
    return (
      <GalleryModalDiv>
        <CloseButton onClick={toggleMod}>Close</CloseButton>
        <GalleryImage src={`${photos[imageSelected].photo_url}`} alt="Stay here!" />
      </GalleryModalDiv>
    );
  }
}

export default GalleryModal;
