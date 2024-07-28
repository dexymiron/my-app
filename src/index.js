import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './redux/redux-store';
import StoreContext from './storeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderEntireTree = (state) => {
  root.render(
  <StoreContext.Provider value={store}>
    <React.StrictMode>
        <App state={state}/>
    </React.StrictMode>
  </StoreContext.Provider>
  );
}

reportWebVitals();

rerenderEntireTree (store.getState());

store.subscribe ( () => {
  let state = store.getState();
  rerenderEntireTree(state)
});