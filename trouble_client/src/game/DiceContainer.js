import { Component } from 'react';


/** Dice Roll management logic. Consumes roll result messages and manages dice roll state.*/
class DiceContainer extends Component {
    render() {
        return this.props.children;
      }
}

export default DiceContainer;