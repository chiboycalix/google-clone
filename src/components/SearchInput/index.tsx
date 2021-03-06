import React from 'react'
import './styles.scss';
import MicIcon from '../../assets/img/mic.svg';
import SearchIcon from '../../assets/img/search.svg';


interface DispatchProps {
  handleSearch: () => void;
}

type Props = DispatchProps;

const SearchInput:  React.FC<Props> = (props) => {
  return (
    <div className="search-input">
      <img src={SearchIcon} alt="SearchIcon" />
      <input type="text" onChange={() => props.handleSearch()}/>
      <img src={MicIcon} alt="MicImg" className="micIcon"/>
    </div>
  )
}
export default SearchInput;
