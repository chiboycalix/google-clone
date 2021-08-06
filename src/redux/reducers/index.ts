import { combineReducers } from 'redux';
import { searchReducer } from './search';

export enum EReduxActionTypes {
  GET_SEARCH_RESULTS = 'GET_SEARCH_RESULTS',
}

export interface IReduxBaseAction {
  type: EReduxActionTypes;
}

export const rootReducer = combineReducers({
  searchReducer,
});

export type AppState = ReturnType<typeof rootReducer>;
