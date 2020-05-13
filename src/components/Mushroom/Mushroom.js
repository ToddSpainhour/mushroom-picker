import React from 'react';

import './Mushroom.scss';

class MushroomCard extends React.Component {
  render() {
    const { mushroom } = this.props;

    return (
      <div className="Mushroom col-3">
  <img src="{mushroom.imgUrl}" className="card-img-top" alt="Mushroom Card" />
  <div className="card-body">
    <h5 className="card-title">{mushroom.name}</h5>
    <p className="card-text">{mushroom.description}</p>
  </div>
</div>
    );
  }
}

export default MushroomCard;
