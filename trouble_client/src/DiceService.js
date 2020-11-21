import React from 'react';
import { BehaviorSubject } from 'rxjs'

class DiceService{
    /** Observable Dice Roll value. Subscribe to add a callback for a new dice roll */
    diceRoll = BehaviorSubject(0);

    rollDice(){

    }

    /** Roll result Handler. Called when a new roll result is received.
     * @param roll {int} value that the player rolled.
     */
    handleRollResult(roll){
        this.diceRoll.next(roll);
    }
}
// diceServiceInstance = useContext(DiceServiceContext)


export const diceServiceInstance = DiceService();

// export const state = {
//     diceServiceInstance
// }

export default DiceService;
export const DiceServiceContext = React.createContext(diceServiceInstance)