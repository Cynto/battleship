import MainContainer from './components/mainContainer/MainContainer';
import HomePage from './components/homePage/HomePage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';
import Start from './components/start/Start';


function App() {
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
