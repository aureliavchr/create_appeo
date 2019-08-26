import React from 'react';
import Technologies from './Technologies';
import ReduxCounterContainer from './ReduxCounterContainer';
import logo from '../../ressources/logo/react.svg';
import '../../styles/Home.scss';

class Home extends React.Component {
  render() {
    // console.log(store.getState)
    return (
      <div className="Home">
        <div className="Home-header">
          <img src={logo} className="Home-logo" alt="logo" />
          <h2>Welcome to Create_appeo</h2>
          
        </div>
        <Technologies />
        {/* <ReduxCounterContainer /> */}
      </div>
    );
  }
}

export default Home;
