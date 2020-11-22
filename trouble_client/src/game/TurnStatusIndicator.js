import { Component } from 'react';


/** UI component to display the current player's turn.*/
class TurnStatusIndicator extends Component {
    render() {
        return (
        <div bg-color="green">{this.props.player}'s turn</div>
        );
      }
}

export default TurnStatusIndicator;