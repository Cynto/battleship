import React from 'react';
import ReactDOM from 'react-dom';
import HomePage from '../HomePage';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

describe('Homepage tests', () => {
  afterEach(cleanup);
  test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <HomePage />
      </Router>,
      div,
    );
  });
  test('Renders main container correctly', () => {
    const { getByTestId } = render(
      <Router>
        <HomePage />
      </Router>,
    );
    expect(getByTestId('start-page')).toHaveClass('start-page');
  });
  test('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <HomePage />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
