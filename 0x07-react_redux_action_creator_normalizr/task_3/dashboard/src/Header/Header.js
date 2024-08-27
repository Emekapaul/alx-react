import React, { useContext } from "react";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext";
import holberton_logo from "../assets/holberton-logo.jpg";

export default function Header() {
  const { user, logOut } = useContext(AppContext);
  const headerStyle = user.isLoggedIn ? styles.App_header : styles.notLoggedIn;
  return (
    <>
      <div className={css(headerStyle)}>
        <img src={holberton_logo} className={css(styles.App_logo)} alt="logo" />
        <h1 className={css(styles.h1)}>School dashboard</h1>
      </div>
      {user.isLoggedIn ? (
        <div id="logoutSection" data-testid="logoutSection">
          <p>Welcome {user.email}</p>
          <button onClick={logOut}>Logout</button>
        </div>
      ) : null}
    </>
  );
}

const styles = StyleSheet.create({
  App_header: {
    display: 'flex',
    borderBottom: '2px solid #E05050'
  },

  notLoggedIn: {
    display: 'flex',
    borderBottom: 'none'
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
