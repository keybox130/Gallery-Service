import React from 'react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const info = this.props;
    return (
      <>
        <h2>{info.title}</h2>
        <h3>{info.rating}</h3>
        <h3>{info.rating_count}</h3>
        <h3>{info.super_host}</h3>
        <h3>{info.location}</h3>
        <h3>Share</h3>
        <h3>Save</h3>
        <img src="stayImgs.png"></img>
      </>
    );
  }
}
export default Header;
