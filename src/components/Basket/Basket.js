import React from 'react';

import PropTypes from 'prop-types';
import mushroomShape from '../../helpers/propz/mushroomShape';

import './Basket.scss';
import MushroomCard from '../Mushroom/Mushroom';

class Basket extends React.Component {
  static propTypes = {
    mushroom: PropTypes.arrayOf(mushroomShape.mushroomShape),
  }

  render() {
    const { basket } = this.props;
    // const randomMushroom = this.props;
    const makeMushroomBasket = basket.map((mushroom, i) => (
      <MushroomCard mushroom={mushroom} key={i + 1}/>
    ));

    return (
      <div className="Basket">
            <h2 className="basket-title">The Basket</h2>
        <div className="Basket d-flex flex-wrap">
            { makeMushroomBasket }
        </div>
      </div>
    );
  }
}

export default Basket;
