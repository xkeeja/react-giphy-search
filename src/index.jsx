import '../assets/stylesheets/application.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './components/App';


const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
root.render(<App />);