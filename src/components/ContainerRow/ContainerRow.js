import React from 'react';

import Forest from '../Forest/Forest';
import Basket from '../Basket/Basket';

class ContainerRow extends React.Component {
  render() {
    console.error('inside your containerRow component');

    return (
    <div className="ContainerRow">
    <Forest />
    <Basket />
    </div>
    );
  }
}

export default ContainerRow;
