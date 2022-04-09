import React from 'react';
import ReactDOM from 'react-dom';
import 'primereact/resources/themes/mdc-dark-indigo/theme.css' //theme
import 'primereact/resources/primereact.min.css' //core css
import 'primeicons/primeicons.css'
import './index.css';
import {App} from './App';
import { store } from './app/store';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
  document.getElementById('root')
);
