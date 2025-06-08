import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import './index.css'
import { Provider } from 'react-redux';
import store from "./redux/store";
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                 <App />
            </PersistGate>
        </Provider>
        <Toaster/>
    </BrowserRouter>
);