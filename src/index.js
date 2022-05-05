import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';
import ContactProvider from "./Components/ContactProvider";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <ContactProvider>
            <App/>
        </ContactProvider>
        <ToastContainer/>
    </BrowserRouter>
);

