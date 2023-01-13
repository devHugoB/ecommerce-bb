import React, {useContext, useRef, useState} from 'react';
import {UserContext} from "../../context/UserContext";

const UserInformation = () => {
  const {email} = useContext(UserContext);

  return (
    <div className="info">
      <input ref={emailRef} type="email" className="info__input" value={email} />
    </div>
  );
};

export default UserInformation;