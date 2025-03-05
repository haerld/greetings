import GreetingsCard from "./greetingsCard";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center w-full min-h-screen bg-gradient-to-b from-white to-pink-300 text-black font-[family-name:var(--font-geist-sans)]">
      <div className="flex justify-center items-center px-4">
        <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold text-gray-800 mt-10 sm:mt-20 text-center">
          HAPPY 23RD BIRTHDAY, DEAR! 🎉
        </h1>
      </div>
      <GreetingsCard />
    </div>
  );
}
