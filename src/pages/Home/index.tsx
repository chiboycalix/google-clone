import React from 'react';
import All from '../Result/All';
import { GoogleText, Header, Footer, SearchInput, Button } from '../../components';
import './styles.scss';

const Home = () => {
  return (
    <div className="home-wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="content">
        <GoogleText />
        <SearchInput />
        <div className="btn-wrapper">
          <Button>Google search</Button>
          <Button>I'm Feeling Lucky</Button>
        </div>
      </div>
      <div className="footer">
        <Footer />
        <All />
      </div>
    </div>
  );
};

export default Home;
