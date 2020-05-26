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

pickAMushroomEvent = (e) => {
  // const { pickAMushroom } = this.props;
  e.preventDefault();
  this.pickAMushroom();
}

showTheRules = () => {
  mushroomData.showTheRules();
}


render() {
  const { mushrooms, basket } = this.state;

  return (
    <div className="App">
      <h2 className='mushroom-title'>Magic Mushroom Picker</h2>
      <button className="btn btn-dark pick-a-mushroom-btn" onClick={this.pickAMushroomEvent}>Pick a Random Mushroom</button>

          <RulesToggle />
            <div className="row">
              <div className="col-6">
          <Forest mushrooms={mushrooms} />
              </div>
              <div className="col-6">
          <Basket basket={basket} mushrooms={mushrooms} />
              </div>
          </div>
    </div>
  );
}
}

export default App;
