import {combineReducers} from 'redux';
import {cardsReducer} from './card-reducer';

const rootReducer = combineReducers {
  cards:cardsReducer
}
