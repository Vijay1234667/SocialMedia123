import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { UserProvider } from './Component/Context/UsersContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <UserProvider>
    <App />
  </UserProvider>
);

reportWebVitals();
