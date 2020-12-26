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
    <div className="MushroomCard col-xl-3 col-lg-5 col-md-12">
      <img src={mushroom.imgUrl} className="card-img-top" alt="Mushroom Card" />
      <div className="card-body col-12">
        <h4 className="mushroom-name card-title">{mushroom.name}</h4>
        <p className="mushroom-discription card-text">{mushroom.description}</p>
      </div>
    </div>
    );
  }
}

export default MushroomCard;
