import React from "react";
import { StyleSheet, css } from "aphrodite";
import holberton_logo from "../assets/holberton-logo.jpg";

export default function Header() {
  return (
    <div className={css(styles.App_header)}>
      <img src={holberton_logo} className={css(styles.App_logo)} alt="logo" />
      <h1 className={css(styles.h1)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  App_header: {
    display: 'flex',
    borderBottom: '2px solid #E05050'
  },

  h1: {
    alignSelf: 'center',
    color: '#E05050'
  },

  App_logo: {
    width: '40vmin',
    height: 'auto'
  }
});