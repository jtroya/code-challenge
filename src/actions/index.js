import axios from 'axios';

import * as types from '../constants/ActionTypes';
import { ARTICLES_QUERY } from '../components/queries';

export const startFetchArticles = {
  type: types.FETCH_ARTICLES_STARTED,
};

export const fetchArticleSuccessed = payload => ({
  type: types.FETCH_ARTICLE_SUCCESSED,
  payload: payload.articles,
});

export const fetchArticleFailed = {
  type: types.FETCH_ARTICLE_FAILED,
};

export const fetchArticles = () => {
  const request = axios.post('http://localhost:4000/graphql', { query: ARTICLES_QUERY });
  return function(dispatch) {
    dispatch(startFetchArticles);
    return request
      .then(res => dispatch(fetchArticleSuccessed(res.data.data)))
      .catch(e => {
        /* eslint no-console: ["error", { allow: ["error"] }] */
        console.error(e);
        dispatch(fetchArticleFailed);
      });
  };
};

export const getArticle = id => ({
  type: types.GET_ARTICLE_DETAIL,
  currentId: id,
});
