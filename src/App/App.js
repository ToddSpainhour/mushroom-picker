import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';
import RulesToggle from '../components/RulesToggle/RulesToggle';

class App extends React.Component {
  // outside the render() seen below is where you put anything that modifies state
state = {
  mushrooms: [],
  basket: [],
}

componentDidMount() {
  const mushrooms = mushroomData.getMushrooms();
  const basket = mushroomData.getBasket();
  this.setState({ mushrooms, basket });
}


pickAMushroom = () => {
  mushroomData.pickAMushroom();
  const mushrooms = mushroomData.getMushrooms();
  const basket = mushroomData.getBasket();
  this.setState({ mushrooms });
  this.setState({ basket });
}

showTheRules = () => {
  mushroomData.showTheRules();
}


render() {
  const { mushrooms, basket } = this.state;

  return (
    <div className="App">
      <h2 className='mushroom-title'>Mushroom Picker</h2>
          <RulesToggle />
            <div className="row">
              <div className="col-6">
          <Forest mushrooms={mushrooms} pickAMushroom={this.pickAMushroom} />
              </div>
              <div div className="col-6">
          <Basket basket={basket} mushrooms={mushrooms} pickAMushroom={this.pickAMushroom} />
              </div>
          </div>
    </div>
  );
}
}

export default App;
