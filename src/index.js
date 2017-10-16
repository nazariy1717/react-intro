
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';



import Tooltip from './Tooltip';
import TimerWrapper from './Timer';



import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
   <TimerWrapper />,
    document.getElementById('content')
);





registerServiceWorker();
