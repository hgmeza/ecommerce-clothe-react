import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import AuthenticationPage from './pages/authentication/authentication'
import {auth, createUserProfileDocument} from './firebase/firebase.utils';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      currentUser: null
    }
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if(userAuth) {
        const userRef = createUserProfileDocument(userAuth);

        (await userRef).onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          })
        });
      } else {
       this.setState({currentUser: userAuth}); 
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div >
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/signin' component={AuthenticationPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
