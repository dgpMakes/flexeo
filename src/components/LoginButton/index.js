import React from 'react'
import Button from './Elements';

import { ButtonRender } from './Elements';
import { IoLogoGoogle } from 'react-icons/io';
import GoogleLogin from 'react-google-login';
import Cookies from 'universal-cookie';

const LoginButton = () => {

  const responseGoogle = (response) => {
    console.log("google response ->" + JSON.stringify(response))

    if (response.tokenId) {
      const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id_token: response.tokenId })
      };
  
      fetch('https://api.flexeo.dgpmakes.com/v1/google-login', requestOptions)
        .then(response => response.json())
        .then(data => {
          const cookies = new Cookies();
          cookies.set('auth', data.jwt, { path: '/', domain: '.flexeo.dgpmakes.com', sameSite: 'lax' });
        }
      );
    }
  }

  return (
    <>
      <GoogleLogin
        clientId="677485879058-rf5hin9fb0ljio7usi0379lijrq6i4ih.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        render={renderProps => (
          <ButtonRender onClick={renderProps.onClick}><IoLogoGoogle size={20} style={{ margin: "0px 3px 0px 0px", verticalAlign: 'middle' }} />Entrar con Google</ButtonRender>
        )}
      />


    </>
  );
};

export default LoginButton;
