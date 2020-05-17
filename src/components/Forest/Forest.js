import React from 'react';
import './Forest.scss';

import MushroomCard from '../Mushroom/Mushroom';

class Forest extends React.Component {
  render() {
    const { mushrooms } = this.props;
    const makeMushrooms = mushrooms.map((mushroom) => (
      <MushroomCard mushroom={mushroom} key={mushroom.id}/>
    ));

    return (
      <div><button className="btn btn-dark">Pick a Mushroom</button>
      <div className="Forest d-flex flex-wrap">
        {makeMushrooms}
      </div>
      </div>
    );
  }
}

export default Forest;
