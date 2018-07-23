import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import ArticleDetail from '../../src/components/ArticleDetail';

describe('ArticleDetail', () => {
  let wrapper = null;
  const getArticle = jest.fn();
  const idSelected = 'ABC123';
  const fakeSelectedItem = {
    id: 'ABC123',
    author: 'my author',
    content: 'the content',
    title: 'the title',
  };

  beforeEach(() => {
    wrapper = shallow(
      <ArticleDetail
        id={idSelected}
        getArticle={getArticle}
        selectedItem={fakeSelectedItem}
      />);
  });

  it('should render the component', () => {
    expect(wrapper.find('ArticleDetail')).toBeTruthy();
  });

  it('should matches the snapshot', () => {
    const tree = shallow(
      <ArticleDetail
        id={idSelected}
        getArticle={getArticle}
        selectedItem={fakeSelectedItem}
      />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
