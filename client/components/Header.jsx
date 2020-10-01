import React from 'react';
import styled from 'styled-components';

const HeaderImg = styled.div`
height: 100px;
background-image: url("header.png");
background-repeat: no-repeat;
background-size: auto 100px;
`;

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
font-size:14px;
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
font-size: 14px;
font-family: 'Montserrat', sans-serif;
color: #6e6e6e;
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
text-decoration: underline;
`;
const Share = styled.p`
font-family: 'Montserrat', sans-serif;
margin-right: 10px;
font-size 14px;
text-decoration: underline;
`;
const Save = styled.p`
text-decoration: underline;
font-size 14px;
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
        <HeaderImg></HeaderImg>
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
