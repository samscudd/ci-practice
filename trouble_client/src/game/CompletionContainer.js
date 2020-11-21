import { Component } from 'react';


/** Completion (win/loss) management logic. Consumes completion messages and manages completed player state*/
class CompletionContainer extends Component {
    render() {
        return this.props.children;
      }
}

export default CompletionContainer;