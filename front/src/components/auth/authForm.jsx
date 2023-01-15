import React, {useContext, useRef, useState} from 'react';
import {useNavigate} from "react-router";
import {addUser, checkUserExist, connectUser, getUser} from "../../api/user";
import {UserContext} from "../../context/UserContext";

const AuthForm = ({login = true}) => {
  const {connect} = useContext(UserContext);
  const [submit, setSubmit] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [pwdError, setPwdError] = useState("");
  const [confirmError, setConfirmError] = useState("");
  const emailRef = useRef();
  const pwdRef = useRef();
  const confirmRef = useRef();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmit(true);

    const email = emailRef.current.value;
    const password = pwdRef.current.value;
    const confirmPassword = !login ? confirmRef.current.value : null;

    if (login) {
      const hash = btoa(password);
      await connectUser(email, hash).then(data => {
        if ("message" in data) {
          setEmailError(data.message)
          setPwdError(data.message)
        } else {
          getUser(data.id).then(user => {
            const informations = {
              token: data.token,
              email: user.email,
              admin: user.level
            }

            connect(informations)
            navigate(("/"))
          })
        }
      })
    } else {
      if (password !== confirmPassword) {
        setConfirmError("Les mots de passes sont different")
        setSubmit(false);
      } else {
        const hash = btoa(password);
        await checkUserExist(email).then(data => {
          if (data.length === 0) {
            addUser(email, hash).then(response => {
              if ("id" in response) navigate("/connexion");
              else alert("Une erreur s'est produite lors de votre inscription");
            })
          } else {
            setEmailError("Cette adresse email est déjà prise")
          }
        })
      }
    }
  }

  return (
    <form className="auth" onSubmit={handleSubmit}>
      <div className="auth__row">
        <label htmlFor="email" className="auth__label">Adresse mail</label>
        <input ref={emailRef} type="email" id="email" className="auth__input" placeholder="Email@example.com" required />
        <span className="auth__error">{emailError && emailError}</span>
      </div>

      <div className="auth__row">
        <label htmlFor="pwd" className="auth__label">Mot de passe</label>
        <input ref={pwdRef} type="password" id="pwd" className="auth__input" placeholder="Mot de passe" required />
        <span className="auth__error">{pwdError && pwdError}</span>
      </div>

      {!login && (
        <div className="auth__row">
          <label htmlFor="confirm" className="auth__label">Confirmation du mot de passe</label>
          <input ref={confirmRef} type="password" id="confirm" className="auth__input" placeholder="email@example.com" required />
          <span className="auth__error">{confirmError && confirmError}</span>
        </div>
      )}

      <button className="auth__submit" disabled={submit}>
        {login ? "Se connecter" : "S'inscrire"}
      </button>
    </form>
  );
};

export default AuthForm;