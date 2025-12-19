import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router } from 'react-router';
import { Query, QueryClient, QueryClientProvider } from '@tanstack/react-query';

const client= new QueryClient()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
    <Router>
    <App />
    </Router>
    </QueryClientProvider>
  </React.StrictMode>
);

reportWebVitals();
