import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
const axios = require('axios');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stay: {},
    };
    this.getAllStays = this.getAllStays.bind(this);
  }

  componentDidMount() {
    this.getAllStays();
  }

  // eslint-disable-next-line class-methods-use-this
  getAllStays() {
    axios.get('/stays')
      .then((response) => {
        this.setState({
          stay: response.data[3],
        });
      })
      .catch((error) => {
        // handle error
        console.log(error);
      });
  }

  render() {
    const { title, rating,rating_count, super_host, location } = this.state.stay;
    return (
        <Header title={title} rating={rating} rating_count={rating_count} super_host={super_host} location={location}></Header>
    );
  }
}

export default App;
