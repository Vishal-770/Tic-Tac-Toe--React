import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaTrophy } from 'react-icons/fa';
import { RxCross2 } from 'react-icons/rx';
import { FaRegCircle } from 'react-icons/fa';


const IntroPage = () => {
  const introRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Set element to display flex and hidden (scale: 0)
    tl.set(introRef.current, { display: 'flex', scale: 0 });
    // Animate in: scale from 0 to 1
    tl.to(introRef.current, { duration: 1, scale: 1, ease: 'back.out(1.7)' });
    // Hold at full size for 2 seconds
    tl.to(introRef.current, { duration: 2, scale: 1 });
    // Animate out: scale from 1 to 0
    tl.to(introRef.current, { duration: 0.5, scale: 0, ease: 'power2.in' });
    // Finally, hide the element
    tl.set(introRef.current, { display: 'none' });
  }, []);

  return (
    <div ref={introRef} className="intro-page">
      <div className="intro-content">
        <h1>Welcome to Tic Tac Toe!</h1>
        <p>Challenge yourself or a friend. Place your Xs and Os, and let the battle for victory begin!</p>
        <div className="icon-row">
          <RxCross2 size={50} color="#fff" />
          <FaRegCircle size={50} color="#fff" />
          <FaTrophy size={50} color="#ffd700" />
        </div>
      </div>
    </div>
  );
};

export default IntroPage;
