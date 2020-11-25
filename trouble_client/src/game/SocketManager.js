import { Component } from 'react';


/** Socket Manager for socket.io socket. All components that subscribe to socket events must be nested inside this component.*/
class SocketManager extends Component {
    render() {
        return this.props.children;
      }
}

export default SocketManager;