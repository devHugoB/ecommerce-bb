import React from 'react';
import {AuthForm} from "../components";

const SignInPage = () => {
  return (
    <>
      <h1 className="title">Inscription</h1>
      <hr/>
      <AuthForm login={false} />
    </>
  );
};

export default SignInPage;