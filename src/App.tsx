import MainContainer from './components/mainContainer/MainContainer';
import HomePage from './components/homePage/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState, useEffect } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setAIGrid } from './actions';
import placeBoats from './api/BoatPlacement';
import Start from './components/start/Start';


function App() {
  const AIArray: number[] = placeBoats('AI')
  const dispatch = useDispatch();
  dispatch(setAIGrid(AIArray))
  
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/start">
            <Start />
          </Route>
          <Route path="/game">
            <MainContainer />
          </Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
