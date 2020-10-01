import React from 'react';
import styled from 'styled-components';

// Main FlexRow, containing 1) FlexRow w Reviews & City, 2)
// FlexRow w/ Share & Savejustify-content: space-between;

const HeaderContent = styled.div`
  width: 1120px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const StayName = styled.h1`
margin: 0px;
font-size: 2em;
font-family: 'Montserrat', sans-serif;
`;
const Rating = styled.p`
font-size: 1em;
font-family: 'Montserrat', sans-serif;
flex-direction:row;
margin-right: 10px;
`;
const RatingCount = styled.p`
font-size: .75em;
font-family: 'Montserrat', sans-serif;
flex-direction:row;
margin-right: 10px;
margin-top: 17px;
`;
const Location = styled.p`
font-size: 1em;
font-family: 'Montserrat', sans-serif;
text-decoration: underline;
flex-direction:row;

`;

const RatingLocation = styled.div`
display: flex;
flex-direction: row;
`;

const ShareSave = styled.div`
display: flex;
flex-direction:row;
`;
const Share = styled.p`
font-size: 1em;
font-family: 'Montserrat', sans-serif;
margin-right: 10px;
`;
const Save = styled.p`
font-size: 1em;
font-family: 'Montserrat', sans-serif;
`;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, rating, rating_count, super_host, location } = this.props.stay;
    return (
      <div>
        <StayName>{title}</StayName>
        <HeaderContent>
          <RatingLocation>
            <Rating>{rating}</Rating>
            <RatingCount>({rating_count})</RatingCount>
            <h3>{super_host}</h3>
            <Location>{location}</Location>
          </RatingLocation>
          <ShareSave>
            <Share>Share</Share>
            <Save>Save</Save>
          </ShareSave>
        </HeaderContent>
      </div>
    );
  }
}
export default Header;
