import { FETCH_ARTICLES_STARTED, FETCH_ARTICLE_SUCCESSED,
         FETCH_ARTICLE_FAILED, GET_ARTICLE_DETAIL } from '../constants/ActionTypes';

const initialState = {
  loading: true,
  articleList: [],
  selectedItem: {},
  currentId: null,
};

const emptyArticle = {
  author: null,
  content: null,
  title: 'Article not found',
  tags: [],
  published: false,
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_ARTICLES_STARTED:
      return Object.assign({}, state, {
        loading: true,
      });
    case FETCH_ARTICLE_SUCCESSED:
      return Object.assign({}, state, {
        loading: false,
        articleList: action.payload,
        currentId: null,
      });
    case FETCH_ARTICLE_FAILED:
      return Object.assign({}, state, {
        selectedItem: {},
        currentId: null,
        articleList: [],
      });
    case GET_ARTICLE_DETAIL:
      return Object.assign({}, state, {
        currentId: action.currentId,
        selectedItem: state.articleList
          .find(article => article.id === action.currentId) || emptyArticle,
      });
    default:
      return state;
  }
}
