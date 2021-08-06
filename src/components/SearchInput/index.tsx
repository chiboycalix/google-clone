import React from 'react'
import './styles.scss';
import MicIcon from '../../assets/img/mic.svg';
import SearchIcon from '../../assets/img/search.svg';

const SearchInput = () => {
  return (
    <div className="search-input">
      <img src={SearchIcon} alt="SearchIcon" />
      <input type="text" />
      <img src={MicIcon} alt="MicImg" className="micIcon"/>
    </div>
  )
}
export default SearchInput;
