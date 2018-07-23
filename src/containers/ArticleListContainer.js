import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { fetchArticles } from '../actions';
import ArticleList from '../components/ArticleList';

const mapStateToProps = state => ({
  loading: state.articles.loading,
  articles: state.articles.articleList,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ fetchArticles }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleList));
