import React, {useContext} from 'react';
import {UserContext} from "../../context/UserContext";

const UserInformation = () => {
  const {email} = useContext(UserContext);

  return (
    <div className="info">
      <input type="email" className="info__input" value={email} />
    </div>
  );
};

export default UserInformation;