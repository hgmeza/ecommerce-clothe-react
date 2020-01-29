import React, { Component } from 'react';

import FormInput from './../FormInput/FormInput';
import CustomButton from './../CustomButton/CustomButton';
import {signInWithGoogle} from './../../firebase/firebase.utils';

import './sign-in.scss';

class SignIn  extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      email: '',
      password: ''
     }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.setState({ email: '', password: '' });
  }

  handleChange = event => {
    const {value, name} = event.target;
    this.setState({ [name]: value });
  }

  render() { 
    return ( 
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            value={this.state.email}
            type='email'
            label='email'
            handleChange={this.handleChange}
            required
          />
          <FormInput
            name='password'
            value={this.state.password}
            type='password'
            label='password'
            handleChange={this.handleChange}
            required
          />
          <div className='buttons'>
            <CustomButton type='submit'>Sign in</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with google</CustomButton>
          </div>
        </form>
      </div>
     );
  }
}
 
export default SignIn;
