import { useContext, useEffect, useRef } from "react";
import "./App.css";
import Container from "./Components/Container";
import ResetButton from "./Components/ResetButton";
import { GameContext } from "./Context/GameContext";
import IntroPage from "./Components/IntroPage";
import { gsap } from "gsap";

function App() {
  const headingRef = useRef(null);
  const containerRef = useRef(null);
  const resetRef = useRef(null);
  const messageRef = useRef(null);

  // Animate heading, container, and reset button after the IntroPage animation.
  useEffect(() => {
    const tl = gsap.timeline({ delay: 3 });
    tl.fromTo(
      headingRef.current,
      { x: -200, opacity: 0 },
      { duration: 2, x: 0, opacity: 1, ease: "power2.out" }
    );
    tl.fromTo(
      containerRef.current,
      { y: -200, opacity: 0, rotation: -15 },
      { duration: 2, y: 0, opacity: 1, rotation: 0, ease: "back.out(1.7)" },
      "-=0.5"
    );
    tl.fromTo(
      resetRef.current,
      { x: -200, opacity: 0 },
      { duration: 2, x: 0, opacity: 1, ease: "power2.out" },
      "-=0.5"
    );
  }, []);

  const { result } = useContext(GameContext);
  useEffect(() => {
    if (result && messageRef.current) {
    
      const rect = messageRef.current.getBoundingClientRect();
     
      const xCenter = window.innerWidth / 2 - (rect.left + rect.width / 2);
      const yCenter = window.innerHeight / 2 - (rect.top + rect.height / 2);

      const msgTl = gsap.timeline();

      // Move in phase: 0.5 sec
      msgTl.to(messageRef.current, {
        duration: 0.5,
        x: xCenter,
        y: yCenter,
        scale: 1.5,
        ease: "power2.out",
        onStart: () => {
          
          gsap.to(messageRef.current, {
            duration: 0.1,
            color: "#000000",
            repeat: 4, 
            yoyo: true,
            ease: "none",
          });
        },
      });

     
      msgTl.to(messageRef.current, { duration: 2 });


      msgTl.to(messageRef.current, {
        duration: 0.5,
        x: 0,
        y: 0,
        scale: 1,
        ease: "power2.in",
        onStart: () => {
         
          gsap.to(messageRef.current, {
            duration: 0.1,
            color: "#000000",
            repeat: 4,
            yoyo: true,
            ease: "none",
          });
        },
      });
    }
  }, [result]);

  function ShowResultMessag(result) {
    if (result === "X") {
      return <>X WON</>;
    } else if (result === "O") {
      return <>O WON</>;
    } else if (result === "Draw") {
      return <>Draw</>;
    }
    return null;
  }

  return (
    <>
      <IntroPage />
      <h1 ref={headingRef} className="heading">
        Tic Tac Toe
      </h1>
      <div ref={containerRef}>
        <Container />
      </div>
      <div ref={resetRef}>
        <ResetButton />
      </div>
      <h2 ref={messageRef}>{ShowResultMessag(result)}</h2>
    </>
  );
}

export default App;
