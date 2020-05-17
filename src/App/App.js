import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';
import Forest from '../components/Forest/Forest';
import Basket from '../components/Basket/Basket';

class App extends React.Component {
  // outside the render() seen below is where you put anything that modifies state
state = {
  mushrooms: [],
  basket: [],
}

componentDidMount() {
  const mushrooms = mushroomData.getMushrooms();
  const basket = mushroomData.getBasket();
  // console.error('your mushrooms are...', mushrooms);
  this.setState({ mushrooms, basket });
}

// this is essentially saying this.pickAMushroom. Outside the render() don't used const

pickAMushroom = () => {
  mushroomData.pickAMushroom();
  const mushrooms = mushroomData.getMushrooms();
  const basket = mushroomData.getBasket();
  this.setState({ mushrooms }); // this resets the state aka reprints
  this.setState({ basket }); // this resets the state aka reprints
}

render() {
  // inside the render() is for anything that modifies the UI
  const { mushrooms, basket } = this.state;

  return (
    <div className="App">
      <h2 className='mushroom-title'>Mushroom Picker</h2>
      <Forest mushrooms={mushrooms} pickAMushroom={this.pickAMushroom}/>
      <Basket basket={basket} mushrooms={mushrooms} pickAMushroom={this.pickAMushroom}/>
    </div>
  );
}
}

export default App;
