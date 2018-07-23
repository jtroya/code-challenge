import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import { MemoryRouter } from 'react-router-dom';

import ArticleList from '../../src/components/ArticleList';

describe('ArticleList', () => {
  let wrapper = null;
  const fetchArticles = jest.fn();
  const fakeArticles = [{ id: 'ABC123', title: 'my title' }];

  beforeEach(() => {
    wrapper = shallow(
      <MemoryRouter>
        <ArticleList
          articles={fakeArticles}
          loading={false}
          fetchArticles={fetchArticles}
        />
      </MemoryRouter>,
    );
  });

  it('should render the component', () => {
    expect(wrapper.find('ArticleList')).toBeTruthy();
  });

  it('should render Loading component', () => {
    wrapper.setProps({ loading: true });
    expect(wrapper.find('.loading')).toBeTruthy();
  });

  it('should matches the snapshot', () => {
    const tree = shallow(
      <ArticleList
        articles={fakeArticles}
        loading={false}
        fetchArticles={fetchArticles}
      />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
