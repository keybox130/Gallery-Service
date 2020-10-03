import React from 'react';
import styled from 'styled-components';

const GalleryModalDiv = styled.div`
  background-color: white;
  width: 100%;
`;

const CenteredDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content:center;
  align-items: center;
`;
const CloseButton = styled.button`
  width: 100px;
  height:35px;
  font-family: 'Montserrat', sans-serif;
  flex-direction: row;
  border-radius: 5px;
`;

const PreviousButton = styled.button`
width: 100px;
  height:35px;
  font-family: 'Montserrat', sans-serif;
`;

const NextButton = styled.button`
  width: 100px;
  height:35px;
  font-family: 'Montserrat', sans-serif;
`;
  // const imgRow = styled.div`
  // display: flex;
  // width:700px
  // flex-direction: row;
  // `;
const ImgCol = styled.div`
  display:flex;
  flex-direction:column;
  // width: 25%;
  // align-items: center;
  // justify-content: center;
  // align-items: center;
`;
const ImgNums = styled.div`
  display: flex;
  flex-direction: column;
`;

const GalleryImage = styled.img`
  display: flex;
  flex-direction: column;
  height:800px;
`;

class GalleryModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.backOrForth = this.backOrForth.bind(this);
  }

  backOrForth(e) {
    this.props.prevOrNext(e.target.id);
  }

  render() {
    const { photos, toggleMod, imageSelected} = this.props;

    // Get the ID num of the last image
    const lastImageID = photos[photos.length-1].id;

    // Get chosen Img from app state
    const chosenImg = photos[imageSelected].photo_url;

    // If the selected image is the first, do not show previous button
    const previousButton = imageSelected === 0 ? <div />
      : (
        <PreviousButton id="Back" onClick={this.backOrForth}>
          B
        </PreviousButton>
      );

    // If the imageSelected is the last image do not show next button
    const nextButton = imageSelected === lastImageID - 1 ? <div />
      : (
        <NextButton id="Forward" onClick={this.backOrForth}>
          K
        </NextButton>
      );

    return (
      <GalleryModalDiv>
        <CloseButton onClick={toggleMod}>Close</CloseButton>
        <CenteredDiv>
          <div>{previousButton}</div>
          <ImgCol>
            <ImgNums>
              {imageSelected + 1}
              /
              {lastImageID}
            </ImgNums>
            <GalleryImage src={`${chosenImg}`} alt="Stay here!" />
          </ImgCol>
          <div>{nextButton}</div>
        </CenteredDiv>
      </GalleryModalDiv>
    );
  }
}

export default GalleryModal;
