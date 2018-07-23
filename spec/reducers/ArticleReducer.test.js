import * as types from '../../src/constants/ActionTypes';
import articleReducer from '../../src/reducers/articleReducer';

describe('Article reducer', () => {
  const initialState = {
    loading: true,
    articleList: [],
    selectedItem: {},
    currentId: null,
  };
  const fakeArticles = { articles: [{ id: 'ABC123', title: 'my title' }] };

  it('should return intial state', () => {
    expect(articleReducer(undefined, { loading: true })).toEqual(initialState);
  });

  it('should handle state FETCH_ARTICLES_STARTED', () => {
    const fakeAction = {
      type: types.FETCH_ARTICLES_STARTED,
    };
    const expectedResult = { loading: true };
    expect(articleReducer({}, fakeAction)).toEqual(expectedResult);
  });

  it('should handle state FETCH_ARTICLE_SUCCESSED', () => {
    const fakeAction = {
      type: types.FETCH_ARTICLE_SUCCESSED,
      payload: fakeArticles.articles,
    };
    const expectedResult = {
      loading: false,
      articleList: fakeArticles.articles,
      currentId: null,
    };
    expect(articleReducer({}, fakeAction)).toEqual(expectedResult);
  });

  it('should handle state FETCH_ARTICLE_FAILED', () => {
    const fakeAction = {
      type: types.FETCH_ARTICLE_FAILED,
    };
    const expectedResult = {
      selectedItem: {},
      currentId: null,
      articleList: [],
    };
    expect(articleReducer({}, fakeAction)).toEqual(expectedResult);
  });

  it('should handle state GET_ARTICLE_DETAIL', () => {
    const currId = 'ABC123';
    const fakeSelected = fakeArticles.articles[0];
    const fakeAction = {
      type: types.GET_ARTICLE_DETAIL,
      currentId: 'ABC123',
    };
    const expectedResult = {
      currentId: currId,
      selectedItem: fakeSelected,
      articleList: fakeArticles.articles,
    };
    expect(articleReducer(
      { articleList: fakeArticles.articles },
      fakeAction)).toEqual(expectedResult);
  });
});
