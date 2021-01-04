import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import moviesReducer from './moviesReducer';

const rootReducers = combineReducers({
  errors: errorReducer,
  movies: moviesReducer
});

export default rootReducers;
