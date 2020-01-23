import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import AuthenticationPage from './pages/authentication/authentication'

import './App.css';

function App() {
  return (
    <div >
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route path='/signin' component={AuthenticationPage} />
      </Switch>
    </div>
  );
}

export default App;
