import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from 'redux-thunk';

import moviesReducer from "./reducers/moviesReducer";

const reducers = combineReducers({
    movies: moviesReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;
