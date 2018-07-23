import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { getArticle } from '../actions';
import ArticleDetail from '../components/ArticleDetail';

const mapStateToProps = state => ({
  currentId: state.articles.currentId,
  selectedItem: state.articles.selectedItem,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({ getArticle }, dispatch);

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ArticleDetail));
