import { Component } from 'react';
import DiceWindow from './DiceWindow';


/** Dice Roll management logic. Consumes roll result messages and manages dice roll state.*/
class DiceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {diceRoll: 6};
  }

  render() {
        return (
        <div>
          <DiceWindow roll={this.state.diceRoll} handleDiceClick={this.rollDice}></DiceWindow>
          {this.props.children}
        </div>);
      }

      /** Called when dice are clicked. 
       * If it is your turn and we have not rolled yet, send dice roll msg to server. */
  rollDice = () => {
  }
}

export default DiceContainer;