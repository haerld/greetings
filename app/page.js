import Image from "next/image";
import GreetingsCard from "./greetingsCard";

export default function Home() {
  return (
    <div className="m-0 w-[100%] h-dvh bg-gradient-to-b from-white to-pink-300 justify-center items-center text-black font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center items-center">
        <h1 className="text-4xl font-bold text-gray-800 mt-20">HAPPY 23RD BIRTHDAY, DEAR! 🎉</h1>
      </div>
      <GreetingsCard />
    </div>
  );
}
