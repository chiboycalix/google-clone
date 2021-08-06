import { EReduxActionTypes } from '../index';
import { IReduxGetSearchAction } from '../../actions/search';

export interface ISearch {
  title: string;
  link: string;
  description: string;
  additional_links: string[];
  cite: {
    domain: string,
    span: string
  };
  image_results: [];
  total: number;
  answers: [];
  ts: number;
}

export interface IReduxSearchState {
  results: ISearch[];
  searchLoaded: boolean;
}

const initialState: IReduxSearchState = {
  results: [],
  searchLoaded: false,
};

type TSearchReducerActions = IReduxGetSearchAction;

export const searchReducer = (state: IReduxSearchState = initialState, action: TSearchReducerActions) => {
  switch (action.type) {
    case EReduxActionTypes.GET_SEARCH_RESULTS:
      return { ...state, results: action.payload, searchLoaded: true };
    default:
      return state;
  }
};
