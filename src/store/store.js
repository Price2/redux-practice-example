import React from 'react';
import { compose, applyMiddleware, createStore, combineReducers } from 'redux';
import thunk from "redux-thunk";
import reducers from '../posts/allReducers';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk))
)


export default store;
