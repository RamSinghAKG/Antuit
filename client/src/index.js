import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import App from './components/app/app';

ReactDOM.render(<App></App>, document.getElementById('app'));

serviceWorker.register();