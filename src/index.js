
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ContactsList from './App';
import registerServiceWorker from './registerServiceWorker';

// ReactDOM.render(
//     <App name="Ivan" action="coding"/>,
//     document.getElementById('title')
// );

ReactDOM.render(
    <ContactsList />,
    document.getElementById('contacts')
);




registerServiceWorker();
