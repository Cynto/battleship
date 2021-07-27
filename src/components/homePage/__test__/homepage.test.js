import React from 'react';
import ReactDOM from 'react-dom';
import StartPage from '../HomePage';
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
        <StartPage />
      </Router>,
      div,
    );
  });
  test('Renders main container correctly', () => {
    const { getByTestId } = render(
      <Router>
        <StartPage />
      </Router>,
    );
    expect(getByTestId('start-page')).toHaveClass('start-page');
  });
  test('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <StartPage />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
