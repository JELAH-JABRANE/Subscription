import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HeroUIProvider } from "@heroui/react";

import App from './App';
import reportWebVitals from './reportWebVitals';
import { GoogleOAuthProvider } from "@react-oauth/google"


const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <GoogleOAuthProvider clientId='607950966319-s5amim2fm87nuigb0q4m5ecop9agrjmi.apps.googleusercontent.com'>
    <HeroUIProvider >
      <App />
    </HeroUIProvider>

  </GoogleOAuthProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
