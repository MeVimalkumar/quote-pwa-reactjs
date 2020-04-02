import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  
  quoteAPI = 'https://api.quotable.io/random';
  
  constructor(props) {
    super(props);
    this.state={
      quote:""
    }
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    return axios.get(this.quoteAPI).then(res => {
      if(res && res.data){
        this.setState({quote:res.data.content})
      }
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        {this.state.quote}
      </div>
    )
  }

}

export default App;
