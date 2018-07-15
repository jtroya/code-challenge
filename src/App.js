import React, { Component } from 'react';

import request from './request';
import { ARTICLES_QUERY } from './queries';
import ArticleList from './ArticleList';
import './App.css';

class App extends Component {
  // definition
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
  }

  // lifecycle
  componentWillMount() {
    request(ARTICLES_QUERY).then(response => {
      this.setState({ articles: response.data.articles });
    });
  }

  // Renders
  render() {
    // console.info('data', JSON.stringify(this.state.articles, null, 2));
    const { articles } = this.state;
    return (
      <div className="App">
        <div className="header">
          <h2>Header</h2>
        </div>
        <div className="body">
          <ArticleList items={articles} />
        </div>
        <div className="footer">Footer</div>
      </div>
    );
  }
}

export default App;
