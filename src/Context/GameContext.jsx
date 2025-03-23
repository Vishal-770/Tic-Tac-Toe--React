import { createContext, useState } from "react";

export const GameContext = createContext();

const ContextProvider = (props) => {
  const [game, setGame] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [gameover, setGameover] = useState(false);

  const [turn, setTurn] = useState("X");
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(null);

  const ContextValue = {
    game,
    setGame,
    gameover,
    setGameover,
    turn,
    setTurn,
    count,
    setCount,
    result,
    setResult,
  };

  return (
    <GameContext.Provider value={ContextValue}>
      {props.children}
    </GameContext.Provider>
  );
};
export default ContextProvider;
