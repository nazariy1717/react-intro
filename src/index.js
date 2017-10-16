
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';



import Tooltip from './Tooltip';



import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
    <div>
        never <Tooltip text="hover me">fsfdsdf</Tooltip>
    </div>,
    document.getElementById('content')
);





registerServiceWorker();
