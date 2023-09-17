import { combineReducers, createStore } from 'redux';
import daysReducer from './reducer/daysReducer';
import addedCardsReducer from './reducer/addedCardsReducer';

const rootReducer = combineReducers({
  days: daysReducer,
  cards: addedCardsReducer
});

export const store = createStore(rootReducer);