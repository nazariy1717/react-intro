import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter, Route } from 'react-router-dom';

import App from './App';
import AboutPage from './components/AboutPage';
import InboxPage from './components/InboxPage';
import Message from './components/Message';

import './styles/style.css';


import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
   <BrowserRouter>
       <App>
           <Route path='/about' component={AboutPage} />
           <Route path='/inbox' component={InboxPage} >
               <Route path='/inbox/messages/:messageId' component={Message} />
           </Route>

       </App>

   </BrowserRouter>,
    document.getElementById('content')
);


registerServiceWorker();
