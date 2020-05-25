import React from 'react';

import './RulesToggle.scss';

class RulesToggle extends React.Component {
  state = {
    visible: false,
  }

toggle = () => {
  this.setState({
    visible: !this.state.visible,
  });
}

render() {
  return (
      <div>
        <button className="btn btn-outline btn-sm rules-toggle-btn" onClick={this.toggle}>Show/Hide Rules</button>
        {this.state.visible
         && <div><h6>A random mushroom will be selected when you click the button below. There are 15 normal mushrooms, 3 poisonous, and 1 deadly.</h6>
         <h6>There is also a single magic mushroom, and if you pick it, you win the game.</h6>
</div>
              }
      </div>

  );
}
}

export default RulesToggle;
