import React, { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { RxCross2 } from "react-icons/rx";
import { FaRegCircle } from "react-icons/fa";
import { GameContext } from "../Context/GameContext";
import checkWinner from "../logic/Logic";
import coinSound from "./mixkit-arcade-game-jump-coin-216.wav";
import winsound from "./mixkit-video-game-win-2016.wav";

const winaudio = new Audio(winsound);
const audio = new Audio(coinSound);

const ThreeBox = ({ temp, row }) => {
  const {
    game,
    setGame,
    turn,
    setTurn,
    count,
    setCount,
    gameover,
    setGameover,
    result,
    setResult,
  } = useContext(GameContext);

 
  const boxRef = useRef(null);

 
  useEffect(() => {
    const winner = checkWinner(game);
    if (winner) {
      setResult(winner);
      winaudio.play();
      setGameover(true);
      setCount(0);
    }
  }, [game, setGameover, setCount, setResult]);


  useEffect(() => {
    if (count === 9 && !gameover) {
      setTimeout(() => {
        setGameover(true);
        winaudio.play();
        console.log("Game Over");
        setResult("Draw");
      }, 0);
      setCount(0);
    }
  }, [count, gameover, setGameover, setCount, setResult]);


  useEffect(() => {
    if (gameover) {
     
      const flashTl = gsap.timeline({
        onComplete: () => {
         
          gsap.set(boxRef.current, {
            backgroundColor: "#0093E9",
            backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)"
          });
        },
      });
      for (let i = 0; i < 5; i++) {
        flashTl.to(boxRef.current, {
          duration: 0.3,
          backgroundColor: "#D9AFD9",
          backgroundImage: "linear-gradient(0deg, #D9AFD9 0%, #97D9E1 100%)",
          ease: "none",
        });
        flashTl.to(boxRef.current, {
          duration: 0.3,
          backgroundColor: "#0093E9",
          backgroundImage: "linear-gradient(160deg, #0093E9 0%, #80D0C7 100%)",
          ease: "none",
        });
      }
    }
  }, [gameover]);

  function click(row, col) {
    if (game[row][col] === "" && !gameover) {
      audio.play();
      setGame((prevGame) =>
        prevGame.map((r, i) =>
          r.map((cell, j) => (i === row && j === col ? turn : cell))
        )
      );
      setTurn((prevTurn) => (prevTurn === "X" ? "O" : "X"));
      setCount((prevCount) => prevCount + 1);
    }
  }

  function check(A) {
    if (A === "X") return <RxCross2 size={"9vh"} />;
    if (A === "O") return <FaRegCircle size={"9vh"} />;
    return <></>;
  }

  return (
    <div ref={boxRef} className="three-box">
      <div className="box" onClick={() => click(row, 0)}>
        <span>{check(temp[0])}</span>
      </div>
      <div className="box" onClick={() => click(row, 1)}>
        <span>{check(temp[1])}</span>
      </div>
      <div className="box" onClick={() => click(row, 2)}>
        <span>{check(temp[2])}</span>
      </div>
    </div>
  );
};

export default ThreeBox;
