import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';

import App from '../../src/components/App';

describe('App', () => {
  let wrapper;

  it('should render de App', () => {
    wrapper = shallow(<App />);
    expect(wrapper.find('.App')).toBeTruthy();
    expect(wrapper.find('.header')).toBeTruthy();
    expect(wrapper.find('ArticleDetailContainer')).toBeTruthy();
  });

  it('matches the snapshot', () => {
    const tree = shallow(<App />);
    expect(toJson(tree)).toMatchSnapshot();
  });
});
