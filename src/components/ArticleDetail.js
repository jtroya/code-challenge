import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ArticleDetail extends Component {
  componentDidMount() {
    this.props.getArticle(this.props.id);
  }

  handleButtonBack = () => {
    this.props.history.push('/');
  }

  render() {
    const { author, content, title, tags, published } = this.props.selectedItem;
    const backButton = <div><button onClick={this.handleButtonBack}>Volver</button></div>;
    const isPublished = published ? 'Yes' : 'No';
    const TagList = ({ items }) =>
      <ul>
        { items ? items.map((item, index) => (
          <li key={index}>
            <span>{ item }</span>
          </li>))
          : null
        }
      </ul>;
    return (
      <div className="container-article">
          <div className="box-info">
            { backButton }
            <h2>{ title }</h2>
            <h3>{ author }</h3>
            <p>{ content }</p>
            <h4>Tags:</h4>
            <TagList items={tags} />
            <p>Published: { isPublished }</p>
            { backButton }
          </div>
      </div>
    );
  }
}

ArticleDetail.propTypes = {
  getArticle: PropTypes.func,
  history: PropTypes.shape({ push: PropTypes.func }),
  id: PropTypes.string,
  selectedItem: PropTypes.shape(
    {
      id: PropTypes.string,
      author: PropTypes.string,
      content: PropTypes.string,
      tags: PropTypes.array,
      title: PropTypes.string,
      published: PropTypes.bool,
    }),
};

export default ArticleDetail;
