import React from 'react';
import ReactDOM from 'react-dom';
import MainContainer from '../MainContainer';
import { render, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';

describe('Main Container tests', () => {
  afterEach(cleanup);
  test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <MainContainer />{' '}
        </Router>
      </Provider>,
      div,
    );
  });
  test('Renders main container correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router>
          <MainContainer />{' '}
        </Router>
      </Provider>,
    );
    expect(getByTestId('main-container')).toHaveClass('main-container');
  });
  test('Matches snapshot', () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <Router>
            <MainContainer />{' '}
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
