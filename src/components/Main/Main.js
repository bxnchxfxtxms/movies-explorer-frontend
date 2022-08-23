import React from 'react';
import Promo from '../Main/Promo/Promo';
import Techs from '../Main/Techs/Techs';
import AboutProject from '../Main/AboutProject/AboutProject';
import AboutMe from '../Main/AboutMe/AboutMe';

class Main extends React.Component {
  render() {
    return (
      <div className="Main">
        <Promo/>
        <AboutProject/>
        <Techs/>
        <AboutMe/>
      </div>
    )
  }
}

export default Main
