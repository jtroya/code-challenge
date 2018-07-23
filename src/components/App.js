import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import ArticleListContainer from '../containers/ArticleListContainer';
import ArticleDetailContainer from '../containers/ArticleDetailContainer';

class App extends Component {
  // Renders
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <h1>Header</h1>
          </div>
          <div className="body">
            <Route exact path="/" component={ArticleListContainer} />
            <Route
              exact
              path="/article/:id"
              render={({ match }) => (
                <ArticleDetailContainer id={match.params.id} />
              )}
            />
          </div>
          <div className="footer">Footer</div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
