import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import './notes/style.css';

// import ContactsList from './App';
// import Timer from './lesson_2';


import NotesApp from './notes/NotesApp';

import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   <NotesApp />,
    document.getElementById('content')
);


registerServiceWorker();
