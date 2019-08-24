import React from 'react';
import Technologies from './Technologies';
import Counter from './Counter';
import logo from '../../ressources/logo/react.svg';
import '../../styles/Home.scss';

class Home extends React.Component {
  render() {
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Create_appeo</h2>
        </div>
        <Technologies />
        <Counter />
      </div>
    );
  }
}

export default Home;
