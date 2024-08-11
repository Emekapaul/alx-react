import React from "react";
import { StyleSheet, css } from "aphrodite";

export default function Login() {
  return (
    <div className='App-body'>
      <p className={css(styles.pElement)}>Login to access the full dashboard</p>
      <label className={css(styles.emailLabel)} htmlFor="email">Email:</label>
      <input className={css(styles.input)} type="email" id="email" name="email" autoComplete="name" />

      <label className={css(styles.passwordLabel)} htmlFor="password">password:</label>
      <input className={css(styles.input)} type="password" id="password" name="password" />

      <button>OK</button>
    </div>
  );
}

const styles = StyleSheet.create({
  pElement: {
    marginLeft: '50px'
  },

  emailLabel: {
    marginLeft: '50px',
    marginRight: '10px'
  },

  passwordLabel: {
    marginRight: '10px'
  },

  input: {
    marginRight: '10px'
  }
});