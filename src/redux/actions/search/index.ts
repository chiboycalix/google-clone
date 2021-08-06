import { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { EReduxActionTypes, IReduxBaseAction } from '../../reducers';
import { ISearch, IReduxSearchState } from '../../reducers/search';
import { APIService } from '../../../config/axiosConfig';

export interface IReduxGetSearchAction extends IReduxBaseAction {
  type: EReduxActionTypes.GET_SEARCH_RESULTS;
  payload: ISearch[];
}

export const getSearchResult = (): ThunkAction<Promise<IReduxGetSearchAction>, IReduxSearchState, undefined, IReduxGetSearchAction> => {
  return async (dispatch: ThunkDispatch<IReduxSearchState, undefined, IReduxGetSearchAction>) => {
    const searchResult = await APIService.get(`/search/q=elon+musk&num=100`);
console.log({searchResult})
    return dispatch({
      type: EReduxActionTypes.GET_SEARCH_RESULTS,
      payload: searchResult.data
    });
  };
}
