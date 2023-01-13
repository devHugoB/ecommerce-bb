import React, {useContext} from 'react';
import { useNavigate } from "react-router-dom";
import {UserContext} from "../../context/UserContext";

const Logout = () => {
  const {logout} = useContext(UserContext);
  const navigate = useNavigate()

  const handleClick = () => {
    logout()
    navigate("/")
  }

  return (
    <button className="logout" onClick={handleClick}>
      Se déconnecter
    </button>
  );
};

export default Logout;