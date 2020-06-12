import React from 'react';
import ReactDOM from 'react-dom';
import {createStore , Provider } from 'redux'
import reducer from './store/reducer'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducer);

ReactDOM.render(
     <Provider>
       <App />
     </Provider> 
      
  , document.getElementById('root'));
registerServiceWorker();
