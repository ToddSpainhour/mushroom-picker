import React from 'react';

import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

import './Forest.scss';

import MushroomCard from '../Mushroom/Mushroom';

class Forest extends React.Component {
  static propTypes = {
    mushrooms: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }


  render() {
    const { mushrooms } = this.props; // get these props ready because I'll be using them
    const makeMushrooms = mushrooms.map((mushroom) => (
      <MushroomCard mushroom={mushroom} key={mushroom.id}/>
    ));

    return (
      <div className="Forest">
        <h2 className="forest-title">The Forest</h2>
        <div className="Forest d-flex flex-wrap">
        {makeMushrooms}
      </div>
      </div>
    );
  }
}

export default Forest;
