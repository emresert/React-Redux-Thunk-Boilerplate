import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import "./i18n"
import "./assets/styles/index.scss";
import 'react-toastify/dist/ReactToastify.css';
import reportWebVitals from './reportWebVitals';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import { store } from './store';
import App from './root/App';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback="loading">
    <Provider store={store}>

      <React.StrictMode>
        <App />
        <ToastContainer autoClose={3000} closeOnClick />
      </React.StrictMode>

    </Provider>
  </Suspense>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
