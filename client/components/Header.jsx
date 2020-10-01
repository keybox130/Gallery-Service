import React from 'react';
import styled from 'styled-components';

const StayName = styled.p`
font-size: 2em;
font-family: 'Montserrat', sans-serif;
`;
const Rating = styled.p`
font-size: 1em;

font-family: 'Montserrat', sans-serif;
`;
const RatingCount = styled.p`
font-size: .75em;
font-family: 'Montserrat', sans-serif;
`;
const Location = styled.p`
font-size: 1em;
font-family: 'Montserrat', sans-serif;
text-decoration: underline;
`;
const Share = styled.p`
font-size: 1em;
font-family: 'Montserrat', sans-serif;
font-color: green;
`;
const Save = styled.p`
font-size: 1em;
font-family: 'Montserrat', sans-serif;
font-color: green;
`;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, rating, rating_count, super_host, location } = this.props.stay;
    return (
      <>
        <StayName>{title}</StayName>
        <Rating>{rating}</Rating>
        <RatingCount>({rating_count})</RatingCount>
        <h3>{super_host}</h3>
        <Location>{location}</Location>
        <Share>Share</Share>
        <Save>Save</Save>
      </>
    );
  }
}
export default Header;
