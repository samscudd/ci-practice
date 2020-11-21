import React, { Component } from 'react';
import Board from '../Board';
import BoardContainer from './BoardContainer';
import CompletionContainer from './CompletionContainer';
import CompletionWindow from './CompletionWindow';
import DiceContainer from './DiceContainer';
import DiceWindow from './DiceWindow';
import SocketManager from './SocketManager'
import TurnContainer from './TurnContainer';
import TurnStatusIndicator from './TurnStatusIndicator';

/** Encapsulating component for the Game View  */
class GameComponent extends Component {
    render() {
        return (
        <SocketManager>
            <TurnContainer>
                <DiceContainer>
                    <BoardContainer>
                        <Board></Board>
                    </BoardContainer>
                    <DiceWindow></DiceWindow>
                </DiceContainer>
                <TurnStatusIndicator></TurnStatusIndicator>
                <CompletionContainer>
                    <CompletionWindow></CompletionWindow>
                </CompletionContainer>
            </TurnContainer>
        </SocketManager>);
      }
}

export default GameComponent;