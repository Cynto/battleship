import React from 'react';
import ReactDOM from 'react-dom';
import Start from '../Start';
import { render, cleanup, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { HashRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../../../store';
import TestRenderer from 'react-test-renderer';
const { act } = TestRenderer;

describe('Start tests', () => {
  afterEach(cleanup);
  test('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <Provider store={store}>
        <Router>
          <Start />{' '}
        </Router>
      </Provider>,
      div,
    );
  });
  test('Renders start container correctly', () => {
    const { getByTestId } = render(
      <Provider store={store}>
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
        <Provider store={store}>
          <Router>
            <Start />{' '}
          </Router>
        </Provider>,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe('grid-tests', () => {
  afterEach(cleanup);
  test('Grid item changes on dragEnter', () => {
    const { getByTestId } = render();
    act(() => {
      render(
        <Provider store={store}>
          <Router>
            <Start />{' '}
          </Router>
        </Provider>,
      );

      const gridItem = getByTestId('grid-item-5');
      fireEvent.dragEnter(gridItem);
    });

    const hoverItem = getByTestId('grid-item-hover-5');
    
    expect(hoverItem).toHaveClass('hover-player grid-item');
    
    
  });
  
});
