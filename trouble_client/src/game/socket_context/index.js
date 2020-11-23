import React, { useState, useEffect } from "react";
import SocketContext from "./context"
import { initSockets } from "./sockets"; 
//       ^ initSockets is shown later on

const SocketProvider = (props) => {
    const [value, setValue] = useState({
        rollResult: 0,
        currentPlayer: 0,
        lastMove: { player: 0, move: 0 },
        gameOver: false,
    });

useEffect(() => initSockets({ setValue }), [initSockets]);
// Note, we are passing setValue ^ to initSockets
return(
    <SocketContext.Provider value={ value }>
      { props.children }
    </SocketContext.Provider>
  )
};

export default SocketProvider;