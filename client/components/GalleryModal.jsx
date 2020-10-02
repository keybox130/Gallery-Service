import React from 'react';
import styled from 'styled-components';

const GalleryModalDiv = styled.div`
  position: absolute;
  display:flex;
  align-items: center;
  content-align: center;
  width: 2000px;
  background-color: white;
`;

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const { photos } = this.props;
    const { imageSelected } = this.props;
    return (
      <GalleryModalDiv>
        <img src={`${photos[imageSelected].photo_url}`} alt="Stay here!" />
      </GalleryModalDiv>
    );
  }
}

export default GalleryModal;
