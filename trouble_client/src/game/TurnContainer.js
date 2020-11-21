import { Component } from 'react';


/** Turn management logic. Consumes next turn messages and manages currentTurn state*/
class TurnContainer extends Component {
    render() {
        return this.props.children;
      }
}

export default TurnContainer;