import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'; 
import ReactDOM from 'react-dom'; 
import './index.css'; 
import App from './App'; 
import { BrowserRouter } from 'react-router-dom';
//import * as registerServiceWorker from './serviceWorker';
 
import * as serviceWorker from './serviceWorker';
//import register from './serviceWorker';
  
//import registerServiceWorker from './registerServiceWorker';
 
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root')); 
  //registerServiceWorker();
  serviceWorker.register();

  //register();