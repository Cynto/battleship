import React from 'react';
import ReactDOM from 'react-dom';
import Start from '../Start';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

describe('Main Container tests', () => {
  afterEach(cleanup);
  test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider>
        <Router>
          <Start />{' '}
        </Router>
      </Provider>,
      div,
    );
  });
  test('Renders main container correctly', () => {
    const { getByTestId } = render(
      <Provider>
        <Router>
          <Start />{' '}
        </Router>
      </Provider>,
    );
    expect(getByTestId('start')).toHaveClass('start');
  });
  test('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Router>
          <Start />
        </Router>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
