import React from 'react';
import './App.scss';

import mushroomData from '../helpers/data/mushroomData';

class App extends React.Component {
  // outside the render() seen below is where you put anything that modifies state

  componentDidMount() {
    const mushrooms = mushroomData.getMushrooms();
    console.error('your mushrooms are...', mushrooms);
  }

  render() {
    // inside the render() is for anything that modifies the UI

    return (
      <div className="App">
        <h2 className='mushroom-title'>Mushroom Picker</h2>
        <button className="btn btn-dark">Pick a Mushroom</button>
      </div>
    );
  }
}

export default App;
