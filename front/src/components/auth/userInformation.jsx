import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContext";

const UserInformation = () => {
  const {email} = useContext(UserContext);

  return (
    <div className="info">
      <h2 className="input__info">{email}</h2>
    </div>
  );
};

export default UserInformation;