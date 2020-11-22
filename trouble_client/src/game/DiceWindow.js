import { Component } from 'react';


/** UI component to prompt the user to roll the dice and then show the result*/
class DiceWindow extends Component {

    render() {
        return (
        <div bg-color="#bbbbbb" onClick={this.props.handleDiceClick}>lastRoll was a {this.props.roll}</div>
        );
      }

      /* Called when dice are clicked */
  handleDiceClick = () => {
    this.props.handleDiceClick();
  }
}

export default DiceWindow;