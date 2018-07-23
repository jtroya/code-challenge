import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ArticleList extends Component {
  componentDidMount() {
    this.props.fetchArticles();
  }

  render() {
    const { articles, loading } = this.props;
    return (
      <div className="container">
        { loading &&
          <div className="loading">
            <h3 className="box-title">loading</h3>
          </div>
        }
        { !loading && articles.map(item => (
          <div key={item.id} className="box">
            <Link to={`/article/${item.id}`} className="link-article">
              <h3 className="box-title">{item.author}</h3>
            </Link>
            <p className="box-excerpt">{item.excerpt}</p>
          </div>)) }
      </div>
    );
  }
}

ArticleList.propTypes = {
  articles: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      author: PropTypes.string,
      excerpt: PropTypes.string,
    })),
  fetchArticles: PropTypes.func,
  loading: PropTypes.bool,
};

export default ArticleList;
