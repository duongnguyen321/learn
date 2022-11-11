import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';

import { Auth0Provider } from "@auth0/auth0-react";

const domain = "duongnguyen.au.auth0.com";
const clientId = "Yu8eIdwpZMSNrUH2RkJuojX2VI0Curru";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={window.location.origin}
      >
        <App />
      </Auth0Provider>
  </React.StrictMode>
);
