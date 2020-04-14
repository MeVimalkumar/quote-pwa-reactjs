import React, { Component, Suspense } from 'react';
import './App.css';
import axios from 'axios';
import Hello from "./components/Hello";
import LanguageSelector from "./components/LanguageSelector";
import ThankYou from "./components/ThankYou";
import './i18n';

class App extends Component {

  quoteAPI = 'https://api.quotable.io/random';

  constructor(props) {
    super(props);
    this.state = {
      quote: ""
    }
  }

  componentDidMount() {
    this.getQuote();
  }

  getQuote() {
    return axios.get(this.quoteAPI).then(res => {
      if (res && res.data) {
        this.setState({ quote: res.data.content })
      }
    }).catch(error => {
      console.error(error);
    });
  }

  render() {
    return (
      <div>
        <Suspense fallback={null}>
          <LanguageSelector />
          <Hello />
          <ThankYou />
          {this.state.quote}
        </Suspense>
      </div>
    )
  }

}

export default App;
