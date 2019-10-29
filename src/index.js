import React from 'react';
import ReactDOM from 'react-dom';
import state from 'stative';
import 'antd/dist/antd.css';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

state.set({
  loading: false,
  coins: [],
  selectedCoin: null
});

// eslint-disable-next-line no-console
state.subscribe(currentState => console.log(currentState));

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
