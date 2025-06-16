import React from "react";
import ReactDOM from 'react-dom/client';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {Toaster} from 'react-hot-toast';
import './index.css'
import { Provider } from 'react-redux';
import store from './redux/store';
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist';


let persistor = persistStore(store);


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

      <BrowserRouter>
        <Provider store = {store}>
           <PersistGate loading={null} persistor={persistor}>
             <App />
             <Toaster />
          </PersistGate>
        </Provider>
    
      </BrowserRouter>

);