import React, { Component } from 'react';
import BoardContainer from './BoardContainer';
import CompletionContainer from './CompletionContainer';
import CompletionWindow from './CompletionWindow';
import DiceContainer from './DiceContainer';
import SocketManager from './SocketManager'
import TurnContainer from './TurnContainer';

/** Encapsulating component for the Game View  */
class GameComponent extends Component {
    render() {
        return (
        <SocketManager>
            <TurnContainer>
                <DiceContainer>
                    <BoardContainer></BoardContainer>
                </DiceContainer>
                <CompletionContainer>
                    <CompletionWindow></CompletionWindow>
                </CompletionContainer>
            </TurnContainer>
        </SocketManager>);
      }
}

export default GameComponent;