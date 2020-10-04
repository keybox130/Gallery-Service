import React from 'react';
import styled from 'styled-components';

const SaveDiv = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: #000;
  opacity: 30%;
  align-items: center;
  justify-content: center;
  position: absolute;
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
    opacity:30%;
  }
}
`;

function SaveModal(props) {
  const { saveModalToggle } = props;
  return (
    <SaveDiv id="SaveModal" onClick={saveModalToggle} />
  );
}
export default SaveModal;
