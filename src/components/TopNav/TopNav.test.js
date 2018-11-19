import React from 'react';
import TopNav from './TopNav';

import { shallow } from 'enzyme';

it('should render correctly with no props', () => {
  const component = shallow(<TopNav />);
  expect(component).toMatchSnapshot();
});

it('should render with given routes object', () => {
  const routes = [
    { path: '/', title: 'Home', isVisible: false },
    { path: '/about', title: 'About' },
  ];
  const component = shallow(<TopNav links={routes} />);
  // expect(component.contains(<Button />)).toEqual(true);
  expect(component).toMatchSnapshot();
});
