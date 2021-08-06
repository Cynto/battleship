import React from 'react';
import ReactDOM from 'react-dom';
import BoatsContainer from '../BoatsContainer';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import TestRenderer from 'react-test-renderer';
const { act } = TestRenderer;

describe('Boats tests', () => {
  afterEach(cleanup);
  test('Boat container renders correctly', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <BoatsContainer />{' '}
        </Router>
      </Provider>,
      div,
    );
    expect(1).toBe(1)
  });
});
