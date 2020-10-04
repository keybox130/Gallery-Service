import React from 'react';
import styled from 'styled-components';

const GalleryModalDiv = styled.div`
  background-color: white;
  width: 100%;
  animation-duration: 1s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-top: 100%;
    height: 300%;
    opacity:25%;
  }

  to {
    margin-top: 0%;
    height: 100%;
    opacity:100%;
  }
}
`;

const GalleryDiv = styled.div`
  display:flex;
  flex-direction:row;
  justify-content: space-between;
  align-items: center;
  width:100%;
`;
const MainButtons = styled.div`
  display:flex;
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
  padding-top:40px;
  padding-right:40px;
  padding-left:40px;
  padding-bottom:40px;
`;
const CloseButton = styled.button`
  width: 100px;
  height:35px;
  font-family: 'Montserrat', sans-serif;
  flex-direction: row;
  border-radius: 5px;
  border: none;
`;
const ShareSaveDiv = styled.div`
display: flex;
flex-direction: row;
`;

const ShareButton = styled.button`
  flex-direction: row;
  width: 25px;
  height: 25px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  background-color: #fff;
  outline:none;
  padding: 0;
  border: none;
  background: none;
  &:hover {
    background-color: #F0EFEF;
  }
`;
const SaveButton = styled(ShareButton)`
  flex-direction: row;
  width: 25px;
  height: 25px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  background-color: #fff;
  outline:none;
  &:hover {
    background-color: #F0EFEF;
  }
`;

const PreviousButton = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 30px;
  font-family: 'Montserrat', sans-serif;
  font-size: 15px;
  background-color: #fff;
  border-style: solid;
  border-width: 1px;
  outline:none;
  &:hover {
    background-color: #F0EFEF;
  }

`;

const NextButton = styled(PreviousButton)`
  margin-right:25px;
`;

const ImgCol = styled.div`
  //width: 25%;
  display:flex;
  flex-direction:column;

   align-items: center;
`;
const ImgNums = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom:10px;
  font-family: 'Montserrat', sans-serif;
`;

const GalleryImage = styled.img`
  display: flex;
  flex-direction: column;
  height:800px;
`;
const ImgDescDiv = styled.div`
font-family: 'Montserrat', sans-serif;

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
    const { photos, toggleMod, saveModalToggle, shareModalToggle, imageSelected} = this.props;

    // Get the ID num of the last image
    // console.log('gallery Modal, Photo ID. line 144', photos[this.props.photos.length - 1].id);
    const lastImageID = photos[this.props.photos.length - 1].id;

    // Get chosen Img from app state
    const chosenImg = photos[imageSelected].photo_url;

    // Get Description of chosen photo
    const ImgDesc = photos[imageSelected].description;

    // If the selected image is the first, do not show previous button
    const previousButton = imageSelected === 0 ? <div />
      : (
        <PreviousButton id="Back" onClick={this.backOrForth}>
          &#60;
        </PreviousButton>
      );

    // If the imageSelected is the last image do not show next button
    const nextButton = imageSelected === lastImageID - 1 ? <div />
      : (
        <NextButton id="Forward" onClick={this.backOrForth}>
          &#62;
        </NextButton>
      );

    return (
      <GalleryModalDiv id="GalleryModalDiv">
        <MainButtons id="MainButtons">
          <CloseButton id="CloseButton" onClick={toggleMod}>X Close</CloseButton>
          <ShareSaveDiv id="ShareSaveDiv">
            <ShareButton onClick={shareModalToggle}>^</ShareButton>
            <SaveButton onClick={saveModalToggle}>Y</SaveButton>
          </ShareSaveDiv>
        </MainButtons>
        <GalleryDiv id="GalleryDiv">
          <div id="PreviousButton">{previousButton}</div>
          <ImgCol id="ImgCol">
            <ImgNums id="ImgNums">
              {imageSelected + 1}
              /
              {lastImageID}
            </ImgNums>
            <GalleryImage id="GalleryImg" src={`${chosenImg}`} alt="Stay here!" />
            <ImgDescDiv id="ImgDesc"><p>{ImgDesc}</p></ImgDescDiv>
          </ImgCol>
          <div id="NextButton">{nextButton}</div>
        </GalleryDiv>
      </GalleryModalDiv>
    );
  }
}

export default GalleryModal;
