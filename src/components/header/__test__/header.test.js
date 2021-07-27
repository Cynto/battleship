import React from 'react';
import ReactDOM from 'react-dom';
import Header from '../Header';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

describe('Start page tests', () => {
  afterEach(cleanup);
  test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <Header />
      </Router>,
      div,
    );
  });
  test('Renders main container correctly', () => {
    const { getByTestId } = render(
      <Router>
        <Header />
      </Router>,
    );
    expect(getByTestId('header')).toHaveClass('header');
  });
  test('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Header />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
