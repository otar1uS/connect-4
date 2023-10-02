import { useContext } from "react";
import { Player1, Player2 } from "../assets/images/images";
import { MainContext } from "./store/MainContext";

const PlayerAndScore = () => {
  const { state } = useContext(MainContext);

  return (
    <div className="flex w-full relative justify-between items-center mb-[50px] xl:mb-[0px] ">
      <div className="  relative xl:absolute   xl:top-[12rem] xl:left-[-12.6875rem]  ml-[20px] w-[142px] h-[81px] xl:h-[160px] xl:w-[141px]    sm:w-[272px] sm:h-[100px]  flex justify-center items-center xl:flex-col rounded-[20px] bg-PureWhite font-bold  shadow-main border-DarkBlack border-[3px] border-solid ">
        <img
          className="absolute xl:top-[-1.8rem] left-[-1.5rem] xl:left-[2.5rem]"
          src={Player1}
          alt="player1"
        />
        <div className="flex flex-col xl:mt-[46px] sm:flex-row xl:flex-col xl:gap-[0px] sm:gap-[20px] items-center ">
          <p className="text-[16px]   leading-[20px] sm:text-[20px] sm:leading-[25px] ">
            PLAYER 1
          </p>
          <h1 className="text-[32px] leading-[41px] sm:text-[56px] sm:leading-[71px]">
            {state.player1Score}
          </h1>
        </div>
      </div>
      <div className="  relative xl:absolute  xl:top-[12rem] xl:right-[-12.6875rem]  mr-[20px] w-[142px] h-[81px] xl:h-[160px] xl:w-[141px]    sm:w-[272px] sm:h-[100px]  flex justify-center items-center xl:flex-col rounded-[20px] bg-PureWhite font-bold  shadow-main border-DarkBlack border-[3px] border-solid ">
        <img
          className="absolute xl:top-[-1.8rem] right-[-1.5rem] xl:right-[2.5rem]"
          src={Player2}
          alt="player2"
        />
        <div className="flex flex-col xl:mt-[46px] sm:flex-row xl:flex-col xl:gap-[0px] sm:gap-[20px] items-center ">
          <h1 className="text-[32px] order-3 sm:order-1 xl:order-3 leading-[41px] sm:text-[56px] sm:leading-[71px]">
            {state.player2Score}
          </h1>
          <p className="text-[16px] order-2  leading-[20px] sm:text-[20px] sm:leading-[25px] ">
            PLAYER 2
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlayerAndScore;
