import { createContext } from "react"; 

const SocketContext = createContext({  
  rollResult: 0,
  currentPlayer: "Player 1",
  completedPlayer: "Player 2",
  boardState: "",
  gameOver: false,
}); 

export default SocketContext;
