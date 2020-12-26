import React from 'react';

import Forest from '../Forest/Forest';
import Basket from '../Basket/Basket';

class ContainerRow extends React.Component {
  render() {
    return (
    <div className="ContainerRow col-12">
      <Forest />
      <Basket />
    </div>
    );
  }
}

export default ContainerRow;
