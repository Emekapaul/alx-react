import holberton_logo from "./holberton-logo.jpg";
import { getFullYear, getFooterCopy } from './utils';
import './App.css';

export default function App() {
  return (
    <>
      <div className="App-header">
        <img src={holberton_logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>

      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email:</label>
        < input type="email" id="email" name="email" />

        <label htmlFor="password">password:</label>
        <input type="password" id="password" name="password" />

        <button>OK</button>
      </div>

      <div className='App-footer'>
        <p>{ getFooterCopy(true)} {getFullYear()}</p>
      </div>
    </>
  );
}
