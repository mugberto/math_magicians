import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import Header from './Header';

test('It should render correctly', () => {
  const tree = renderer.create(<BrowserRouter><Header /></BrowserRouter>).toJSON();
  expect(tree).toMatchSnapshot();
});
