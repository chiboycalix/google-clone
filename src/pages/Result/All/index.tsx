import React from 'react'
import { connect } from 'react-redux';
import { AnyAction, bindActionCreators, Dispatch } from 'redux';
import { getSearchResult } from '../../../redux/actions/search';
import { AppState } from '../../../redux/reducers';
import { ISearch } from '../../../redux/reducers/search';

interface DispatchProps {
  getSearchResult: () => void;
}

type Props = DispatchProps;

const Search: React.FC<Props> = (props) => {
  console.log({ props });

  const fetchResult = async () => {
    return props?.getSearchResult();
  };

  React.useEffect(() => {
    fetchResult();
  }, []);
  
  return <div>All result page</div>;
};

const mapStateToProps = (state: AppState) => ({
  search: state.searchReducer,
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) =>
  bindActionCreators(
    {
      getSearchResult,
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Search);
