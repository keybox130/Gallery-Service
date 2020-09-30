import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // getChosenStay();
  }

  this.getChosenStay() {
    axios.get('/stays')
      .then(function (response) {
        // handle success
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  }

  render() {
    return (
        <Header></Header>
    );
  }
}

export default App;

