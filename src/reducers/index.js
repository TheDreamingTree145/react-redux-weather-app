import { combineReducers } from 'redux';
import cityReducer from './cities';

const rootReducer = combineReducers({
  cities: cityReducer
});

export default rootReducer;
