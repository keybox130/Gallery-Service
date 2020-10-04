import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderContent = styled.div`
  width: 1120px;
  height:55px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

`;
const StayName = styled.h1`
margin: 0px;
font-size: 1.6em;
font-family: 'Montserrat', sans-serif;
`;
const RatingStar = styled.p`
font-family: 'Assistant', sans-serif;
color:rgb(236, 76,96);
font-size: 2.3em;
margin-top: 5px;
margin-right:3px;
`;

const Rating = styled.p`
font-size:14px;
font-family: 'Montserrat', sans-serif;
flex-direction:row;
margin-right: 5px;
`;
const RatingCount = styled.p`
font-size: .8em;
font-family: 'Montserrat', sans-serif;
color: #6e6e6e;
flex-direction:row;
margin-right: 10px;
margin-top: 15px;
`;
const SuperHostDiv = styled.div`
flex-direction:row;

`;
const SuperHostIcon = styled.div`
flex-direction:row;
height: 15px;
width:10px;
background-image: url("superHost.png");
background-repeat: no-repeat;
background-size: 10px;
margin-right:2px;
display:inline-block;
`;
const SuperHost = styled.p`
font-size: .8em;
font-family: 'Montserrat', sans-serif;
color:rgb(113, 113, 113);
flex-direction:row;
margin-right: 10px;
margin-top: 15px;
display:inline-block;
`;
const Location = styled.p`
font-size: 14px;
font-family: 'Montserrat', sans-serif;
color:rgb(113, 113, 113);
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
cursor: pointer;
`;
const Save = styled.p`
text-decoration: underline;
font-size 14px;
font-family: 'Montserrat', sans-serif;
cursor: pointer;
`;
class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, rating, rating_count, super_host, location } = this.props.stay;
    const Superhost = super_host ? <><SuperHostIcon></SuperHostIcon><SuperHost>Superhost</SuperHost></>
      : <div />;
    return (
      <div>
        <StayName>{title}</StayName>
        <HeaderContent>
          <RatingLocation>
            <RatingStar>*</RatingStar>
            <Rating>{rating}</Rating>
            <RatingCount>({rating_count})</RatingCount>
            <SuperHostDiv>{Superhost}</SuperHostDiv>
            <Location>{location}</Location>
          </RatingLocation>
          <ShareSave>
            <Share>Share</Share>
            <Save onClick={this.props.saveModalToggle} >Save</Save>
          </ShareSave>
        </HeaderContent>
      </div>
    );
  }
}

// Header.propTypes = {
//   stay.title: PropTypes.string.isRequired,
//   rating: PropTypes.string.isRequired,
// };
export default Header;
