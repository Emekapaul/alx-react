import React from "react";
import { StyleSheet, css } from "aphrodite";
//import './Login.css';

export default function Login() {
  return (
    <div className='App-body'>
      <p className={css(styles.pElement)}>Login to access the full dashboard</p>
      <div className={css(styles.inputGrp)}>
        <label className={css(styles.emailLabel)} htmlFor="email">Email:</label>
        <input className={css(styles.input)} type="email" id="email" name="email" autoComplete="name" />
      </div>

      <div className={css(styles.inputGrp)}>
        <label className={css(styles.passwordLabel)} htmlFor="password">password:</label>
        <input className={css(styles.input)} type="password" id="password" name="password" />
      </div>

      <button className={css(styles.button)}>OK</button>
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
      border: '3px solid #ffcc99',
      borderRadius: '4px'
    }
  },

  smallScreen: {
    '@media screen and (max-width: 900px)': {

    }
  }
});