import React from 'react';
import PropTypes from 'prop-types';

function RenderArticleList({ items }) {
  return (
    <div className="container">
      { items.map(item => (
        <div key={item.id} className="box">
          <h3 className="box-title">{item.author}</h3>
          <p className="box-excerpt">{item.excerpt}</p>
        </div>))
      }
    </div>
  );
}

RenderArticleList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape(
    {
      id: PropTypes.string,
      author: PropTypes.string,
      excerpt: PropTypes.string,
    })),
};

RenderArticleList.defaultProps = {
  items: [],
};

export default RenderArticleList;
