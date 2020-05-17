import React from 'react';
import './Basket.scss';
import MushroomCard from '../Mushroom/Mushroom';

class Basket extends React.Component {
  render() {
    const { basket } = this.props;
    // const randomMushroom = this.props; // keep this nearby. we will need it soon
    const makeMushroomBasket = basket.map((mushroom) => (
      <MushroomCard mushroom={mushroom} key={mushroom.id}/>
    ));

    return (
      < div className="Basket d-flex flex-wrap">
      <h1>The basket</h1>
      { makeMushroomBasket }
    </div>
    );
  }
}

export default Basket;
