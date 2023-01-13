import React, {useContext, useRef, useState} from 'react';
import {useNavigate} from "react-router";
import {addUser, connectUser} from "../../api/user";
import {UserContext} from "../../context/UserContext";

const AuthForm = ({login = true}) => {
  const {connect} = useContext(UserContext);
  const [submit, setSubmit] = useState(false);
  const emailRef = useRef();
  const pwdRef = useRef();
  const confirmRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const email = emailRef.current.value;
    const password = pwdRef.current.value;
    const confirmPassword = confirmRef.current.value;

    if (login) {
      const hash = Buffer.from(password).toString('base64');
      await connectUser(email, hash).then(data => {
        console.log(data)
        // connect(data)
        // navigate("/")
      })
    } else {
      if (password !== confirmPassword) {
        document.getElementById("confirm").innerText = "Les mots pde passes sont différents";
        setSubmit(false);
      } else {
        const hash = Buffer.from(password).toString('base64');
        await addUser(email, hash).then(_ => navigate("/connexion"))
      }
    }
  }

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <div className="auth__row">
        <label htmlFor="email" className="auth__label">Adresse mail</label>
        <input ref={emailRef} type="email" id="email" className="auth__input" placeholder="Email@example.com" required />
        <span className="auth__error" id="email"></span>
      </div>

      <div className="auth__row">
        <label htmlFor="pwd" className="auth__label">Mot de passe</label>
        <input ref={pwdRef} type="password" id="pwd" className="auth__input" placeholder="Mot de passe" required />
        <span className="auth__error" id="pwd"></span>
      </div>

      {!login && (
        <div className="auth__row">
          <label htmlFor="confirm" className="auth__label">Confirmation du mot de passe</label>
          <input ref={confirmRef} type="password" id="confirm" className="auth__input" placeholder="email@example.com" required />
          <span className="auth__error" id="confirm"></span>
        </div>
      )}

      <button className="auth__submit" disabled={submit}>
        {login ? "Se connecter" : "S'inscrire"}
      </button>
    </form>
  );
};

export default AuthForm;