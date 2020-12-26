import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';
import RulesToggle from '../components/RulesToggle/RulesToggle';

class App extends React.Component {
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
  e.preventDefault();
  this.pickAMushroom();
}

showTheRules = () => {
  mushroomData.showTheRules();
}


render() {
  const { mushrooms, basket } = this.state;

  return (
    <div className="App col-12">
      <h1 className='mushroom-title'>Magic Mushroom Picker</h1>
      <div className="pick-a-mushroom-btn-container">
        <button className="btn btn-dark pick-a-mushroom-btn col-md-4 col-sm-6" onClick={this.pickAMushroomEvent}>Pick a Random Mushroom</button>
      </div>

          <RulesToggle />
            <div className="col-12 forest-basket-container">
              <div className="col-6 forest-container">
                <Forest mushrooms={mushrooms} />
              </div>
              <div className="col-6 basket-container">
                <Basket basket={basket} mushrooms={mushrooms} />
              </div>
            </div>
    </div>
  );
}
}

export default App;
