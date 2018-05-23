import React from 'react';
//"/Users/davidzubal/Desktop/audivity/src/index.js"
import ReactDOM from 'react-dom';
import Amplify from 'aws-amplify'
import 'semantic-ui-css/semantic.min.css'; // above index.css because we don't want to overwrite
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <App />,
  document.getElementById('root'));
registerServiceWorker();
