import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { StrictMode } from 'react';
import { BrowserRouter } from 'react-router-dom';
import SessionChecker from './utils/SessionChecker.tsx';
import SessionListener from './utils/SessionListener.tsx';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SessionChecker />
      <SessionListener />
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="colored"
      />
      <App />
    </BrowserRouter>
  </StrictMode>,
);
