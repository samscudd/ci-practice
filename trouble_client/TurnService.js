import React from 'react';
import { BehaviorSubject } from 'rxjs'

class TurnService{
    /** Observable player whose turn it is. Subscribe to add a callback for a turn rotation*/
    currentPlayer = BehaviorSubject({});

    /** Next Turn Handler. Called when a turn rotation is received
     * @param roll {int} value that the player rolled.
     */
    handleNextTurn(player){
        this.currentPlayer.next(roll);
    }

    /** @returns {boolean} True if it is currently the player's turn */
    isMyTurn(){

    }
}

export const turnServiceInstance = TurnService();

export const state = {
    turnServiceInstance: turnServiceInstance
}

export default TurnService;
export const TurnServiceContext = React.createContext(state)