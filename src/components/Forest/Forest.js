import React from 'react';
import './Forest.scss';

import MushroomCard from '../Mushroom/Mushroom';

class Forest extends React.Component {
  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <MushroomCard mushroom={mushroom}/>
    ));

    return (
      <div className="Forest d-flex flex-wrap">
        {makeMushrooms}
      </div>
    );
  }
}

export default Forest;
