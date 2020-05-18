import React from 'react';
import './Forest.scss';

import MushroomCard from '../Mushroom/Mushroom';

class Forest extends React.Component {
  pickAMushroomEvent = (e) => {
    const { pickAMushroom } = this.props;
    e.preventDefault();
    pickAMushroom();
  }

  render() {
    const { mushrooms } = this.props; // get these props ready because I'll be using them
    const makeMushrooms = mushrooms.map((mushroom) => (
      <MushroomCard mushroom={mushroom} key={mushroom.id}/>
    ));

    return (
      <div><button className="btn btn-dark pick-a-mushroom-btn" onClick={this.pickAMushroomEvent}>Pick a Mushroom</button>
      <div className="Forest d-flex flex-wrap">
        {makeMushrooms}
      </div>
      </div>
    );
  }
}

export default Forest;
