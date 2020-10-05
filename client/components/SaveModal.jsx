import React from 'react';
import styled from 'styled-components';

const SaveModalBG = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: #000;
  opacity: 50%;
  position: absolute;
`;
const SaveModalContainer = styled.div`
height: 100vh;
width: 100vw;
display: flex;
align-items: center;
justify-content: center;
animation-duration: 1s;
animation-name: slidein;
}

@keyframes slidein {
from {
  margin-top: 100%;
  height: 300vh;
  opacity:25%;
}

to {
  margin-top: 0%;
  height: 100vh;
}
}
`;

const SaveModalDiv = styled.div`
z-index: 6;
width: 570px;
height: 400px;
background-color: #fff;
border-radius: 30px;

`;

const SaveModalHeader = styled.div`
  z-index: 6;
  display: flex;
  justify-content: flex-start;   /* adjustment */
  position: relative;
  min-height: 30px !important;
  padding: 20px 24px !important;
  border-bottom: 1px solid rgb(235, 235, 235) !important;
`;
const SaveModalHeaderText = styled.div`
  flex: 0 1 auto;
  width: 150px;
  height: 100px;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`;
const CloseButton = styled.button`

  width: 30px;
  height:30px;
  flex: 0 1 auto;
  margin-right: auto;
  font-family: 'Montserrat', sans-serif;

  border-radius:20px;
  border: none;
  cursor: pointer;
  background-color: #FFF;
  &:hover {
    background-color: #F0EFEF;
  }
  outline:none;
`;
const SaveListHeaderText = styled.div`
  font-family: 'Montserrat', sans-serif;
  overflow: hidden !important;
  flex: 0 1 auto !important;
  text-align: center !important;
`;

function SaveModal(props) {
  const { saveModalToggle } = props;
  return (
    <SaveModalContainer id="SaveModalContainer">
      <SaveModalDiv id="SaveModalDiv">
        <SaveModalHeader id="SaveModalHeader">
          <CloseButton id="CloseButton" onClick={saveModalToggle}>X</CloseButton>
          <SaveModalHeaderText id="SaveModalHeaderText">
            <SaveListHeaderText id="SaveToListText">
              Save To List
            </SaveListHeaderText>
          </SaveModalHeaderText>
        </SaveModalHeader>
      </SaveModalDiv>
      <SaveModalBG id="SaveModalBG" onClick={saveModalToggle} />
    </SaveModalContainer>
  );
}
export default SaveModal;
