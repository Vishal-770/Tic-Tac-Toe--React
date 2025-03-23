import React, { useContext } from "react";
import ThreeBox from "./ThreeBox";
import { GameContext } from "../Context/GameContext";

const Container = () => {
  const { game } = useContext(GameContext);

  return (
    <div className="container">
      <ThreeBox temp={game[0]} row={0}></ThreeBox>
      <ThreeBox temp={game[1]} row={1}></ThreeBox>
      <ThreeBox temp={game[2]} row={2}></ThreeBox>
    </div>
  );
};

export default Container;
