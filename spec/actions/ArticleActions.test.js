import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as actions from '../../src/actions';
import * as types from '../../src/constants/ActionTypes';

describe('Artile actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const fakeArticles = { articles: [{ title: 'my title' }] };

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('should create action startFetchArticles', () => {
    const fakeAction = {
      type: types.FETCH_ARTICLES_STARTED,
    };
    expect(actions.startFetchArticles).toEqual(fakeAction);
  });

  it('should create action fetchArticleSuccessed', () => {
    const fakeAction = {
      type: types.FETCH_ARTICLE_SUCCESSED,
      payload: fakeArticles.articles,
    };
    expect(actions.fetchArticleSuccessed(fakeArticles)).toEqual(fakeAction);
  });

  it('should create action fetchArticleFailed', () => {
    const fakeAction = {
      type: types.FETCH_ARTICLE_FAILED,
    };
    expect(actions.fetchArticleFailed).toEqual(fakeAction);
  });

  it('should create action fetchArticles', () => {
    const store = mockStore({
      loading: true,
      articles: [],
    });
    const fakeActions = [
      { type: types.FETCH_ARTICLES_STARTED },
      { type: types.FETCH_ARTICLE_SUCCESSED,
        payload: fakeArticles.articles },
    ];
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: fakeArticles,
      });
    });

    store.dispatch(actions.fetchArticles())
    .then((() => {
      expect(store.getActions()).toEqual(fakeActions);
    }));
  });

  it('should create action getArticle', () => {
    const currId = 'ABC123';
    const fakeAction = {
      type: types.GET_ARTICLE_DETAIL,
      currentId: currId,
    };
    expect(actions.getArticle(currId)).toEqual(fakeAction);
  });
});
