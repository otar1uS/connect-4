import { useEffect } from "react";
import GameHeader from "../GameHeader";
import PlayerAndScore from "../PlayerAndScore";
import GameBoard from "../GameBoard";
import GamePlayersTimerAndWinnerCard from "../GamePlayersTimerAndWinnerCard";

const Game = () => {
  useEffect(() => {
    const bodyElement = document.querySelector("body") as HTMLElement | null;
    if (bodyElement !== null) {
      bodyElement.style.backgroundColor = "#7945ff";
    }
  }, []);
  return (
    <main className="w-full   h-full bg-LightPurple   ">
      <div className="w-full  mx-auto max-w-[632px] px-[20px] pt-[53px] sm:px-[0px]  bg-LightPurple">
        <GameHeader />
        <PlayerAndScore />
        <GameBoard />
      </div>
      <GamePlayersTimerAndWinnerCard />
      <div className="w-full h-[234px]  sm:mt-[34rem]  mt-[18rem]   z-[-1] xl:h-[200px] rounded-tl-[60px] rounded-tr-[60px] bg-DarkPurple " />
    </main>
  );
};

export default Game;
