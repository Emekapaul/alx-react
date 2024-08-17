import React, { useState } from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enableSubmit, setenableSubmit] = useState(false);
  const [formValues, setFormValues] = useState({
    email: '',
    password: '',
  });

  function handleLoginSubmit(event) {
    event.preventDefault(); // Prevents the default form submission
    setIsLoggedIn(true);
  }

  function handleChangeEmail(event) {
    const email = event.target.value;
    checkEnableSubmit(email, formValues.password);
    setFormValues({ ...formValues, email });
  }

  function handleChangePassword(event) {
    const password = event.target.value;
    checkEnableSubmit(formValues.email, password);
    setFormValues({ ...formValues, password });
  }

  function checkEnableSubmit(email, password) {
    const value = (email !== '' && password !== '') ? true : false;
    setenableSubmit(value);
  }

  return (
    <div className='App-body'>
      <p className={css(styles.pElement)}>Login to access the full dashboard</p>
      <form onSubmit={handleLoginSubmit}>
        <div className={css(styles.inputGrp)}>
          <label className={css(styles.emailLabel)} htmlFor="email">Email:</label>
          <input value={formValues.email} onChange={handleChangeEmail} className={css(styles.input)} type="email" id="email" name="email" autoComplete="name" />
        </div>

        <div className={css(styles.inputGrp)}>
          <label className={css(styles.passwordLabel)} htmlFor="password">Password:</label>
          <input value={formValues.password} onChange={handleChangePassword} className={css(styles.input)} type="password" id="password" name="password" />
        </div>

        <input type="submit" value='OK' disabled={!enableSubmit} className={css(styles.button)} />
      </form>
    </div>
  );
}

const styles = StyleSheet.create({
  inputGrp: {
    display: 'inline',
    '@media screen and (max-width: 900px)': {
      display: 'block',
      marginBottom: '10px'
    }
  },

  pElement: {
    marginLeft: '50px'
  },

  emailLabel: {
    marginLeft: '50px',
    marginRight: '10px'
  },

  passwordLabel: {
    marginRight: '10px',
    '@media screen and (max-width: 900px)': {
      marginLeft: '50px',
    }
  },

  input: {
    marginRight: '10px'
  },

  button: {
    '@media screen and (max-width: 900px)': {
      marginLeft: '50px',
      //border: '3px solid #ffcc99',
      borderRadius: '4px'
    }
  },

  smallScreen: {
    '@media screen and (max-width: 900px)': {

    }
  }
});