import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import CssBaseline from '@mui/material/CssBaseline';
// import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import appStore from './redux/appStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  // <React.StrictMode>
  <>
    <Provider store={appStore}>
      <CssBaseline />
      <App />
    </Provider>
  </>
  // </React.StrictMode>
);


// reportWebVitals();
