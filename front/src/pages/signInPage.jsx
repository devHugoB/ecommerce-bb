import React from 'react';
import {AuthForm} from "../components";

const SignInPage = () => {
  return (
    <>
    <div className="signin">
      <h1 className="title">Inscription</h1>
      <AuthForm login={false} />
    </div>
    </>
  );
};

export default SignInPage;