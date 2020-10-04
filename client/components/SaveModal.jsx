import React from 'react';
import styled from 'styled-components';

const SaveDiv = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  height: 400px;
  width: 100%;
  background-color: #000;
  opacity: 30%;
  align-items: center;
  justify-content: center;
  position: absolute;
`;

function SaveModal() {
  return (
    <SaveDiv id="SaveModal" />
  );
}
export default SaveModal;
