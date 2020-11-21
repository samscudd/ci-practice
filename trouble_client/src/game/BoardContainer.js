import { Component } from 'react';


/** Board management logic. Consumes move messages and manages board state.*/
class BoardContainer extends Component {
    render() {
        return this.props.children;
      }
}

export default BoardContainer;