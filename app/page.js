"use client";

import GreetingsCard from "./greetingsCard";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";

export default function Home() {
  // State to handle screen size for confetti
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    setDimensions({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  return (
    <div 
      className="flex flex-col justify-center items-center w-full min-h-screen bg-cover bg-center bg-no-repeat text-black font-[family-name:var(--font-geist-sans)]"
      style={{ backgroundImage: "url('/bg.png')" }} // Ensure bg.png is in the /public folder
    >
      {/* Party Poppers 🎉 */}
      <Confetti 
        width={dimensions.width} 
        height={dimensions.height} 
        numberOfPieces={50} // Adjust density of confetti
        gravity={0.2} // Slow falling effect
        recycle={true} // Stop after one burst
      />

      <div className="flex justify-center items-center px-4">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-black text-pink-600 mt-10 sm:mt-20 text-center"
        style={{ textShadow: "2px 2px 8px rgba(255, 255, 255, 0.8), 4px 4px 10px rgba(0, 0, 0, 0.4)" }}>
          HAPPY 23RD BIRTHDAY, HOLLIE MARIE! 🎉
        </h1>
      </div>

      <GreetingsCard />
    </div>
  );
}
