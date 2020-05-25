import React from 'react';

import mushroomShape from '../../helpers/propz/mushroomShape';

import './Mushroom.scss';


class MushroomCard extends React.Component {
  static propTypes = {
    mushroom: mushroomShape.mushroomShape,
  }

  render() {
    const { mushroom } = this.props;

    return (
      <div className="MushroomCard col-3">
  <img src={mushroom.imgUrl} className="card-img-top" alt="Mushroom Card" />
  <div className="card-body">
    <h4 className="card-title text-body">{mushroom.name}</h4>
    <p className="card-text text-body">{mushroom.description}</p>
  </div>
</div>
    );
  }
}

export default MushroomCard;
