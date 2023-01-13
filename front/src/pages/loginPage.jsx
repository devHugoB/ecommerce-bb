import React from 'react';
import {AuthForm} from "../components";

const LoginPage = () => {
  return (
    <>
      <div className="login">
        <h1 className="title">Connexion</h1>
        <AuthForm />
      </div>
      
    </>
  );
};

export default LoginPage;