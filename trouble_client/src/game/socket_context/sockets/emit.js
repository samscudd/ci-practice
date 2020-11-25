import { socket } from "./index";

/**
 * @summary methods that can be imported and used in any component
 */

export const sendRollDice = () => {
  socket.emit('rollDice');
    // socket.
};

export const movePiece = (piece) => {
  socket.emit('movePiece', piece);
};
