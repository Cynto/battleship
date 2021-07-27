import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from '../MainContainer';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';

describe('Main Container tests', () => {
  afterEach(cleanup);
  test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Router>
        <MainContainer />{' '}
      </Router>,
      div,
    );
  });
  test('Renders main container correctly', () => {
    const { getByTestId } = render(
      <Router>
        <MainContainer />
      </Router>,
    );
    expect(getByTestId('main-container')).toHaveClass('main-container');
  });
  test('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <MainContainer />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
