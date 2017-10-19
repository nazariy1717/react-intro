import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';

import ContactsList from './App';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   <ContactsList />,
    document.getElementById('contacts')
);


registerServiceWorker();
