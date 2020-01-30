import React from 'react';

import SignIn from './../../components/SignIn/SignIn';
import SignUp from './../../components/SignUp/SignUp';

import './authentication.scss';

const AuthenticationPage = () => {
  return ( 
    <div className='authentication'>
      <SignIn />
      <SignUp />
    </div>
   );
}
 
export default AuthenticationPage;
