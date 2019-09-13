import React from 'react';
import { render } from 'react-dom';
import {applyMiddleware, createStore} from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk'
import App from "./components/App";
import {rootReducer} from "./reducers/root-reducer";
import {loadStateFromLocalStorage, saveStateToLocalStorage} from "./utils/local-storage";
import "./styles/index.css";

let state = loadStateFromLocalStorage();
const store = createStore(
    rootReducer,
    state,
    applyMiddleware(thunkMiddleware)
);
store.subscribe(() => {
    let state = store.getState();
    saveStateToLocalStorage(state);
});

render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);