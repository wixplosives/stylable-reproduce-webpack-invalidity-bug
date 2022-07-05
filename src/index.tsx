import React from 'react';
import { createRoot } from 'react-dom/client';
import { classes } from './base.st.css';
import { App } from './app';

document.body.classList.add(classes.root);

createRoot(document.body.appendChild(document.createElement('div'))).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
