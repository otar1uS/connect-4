import { useContext, useEffect } from "react";
import { MainContext } from "./store/MainContext";
import { GameContext } from "./store/GameContext";

const GamePlayersTimerAndWinnerCard = () => {
  const { state, dispatch } = useContext(MainContext);
  const { state: curState, dispatch: dispatcher } = useContext(GameContext);

  useEffect(() => {
    if (!curState.openMenu) {
      if (state.time > 0) {
        const startGame = setInterval(() => {
          dispatch({ type: "main/time" });
        }, 1000);
        return () => clearInterval(startGame);
      }

      if (state.time === 0) {
        dispatch({
          type: "main/nextPlayersTurn",
        });
        dispatch({ type: "main/time", payload: 30 });
      }
    }
  }, [state.time, dispatch, state.nextPlayersTurn, curState.openMenu]);

  const whoWon = state.whoWon;

  return (
    <>
      {whoWon ? (
        <div className="bg-PureWhite  absolute  rounded-[20px] flex justify-center items-center pt-[10px] flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 top-[640px]  sm:top-[900px] littleMore  xl:top-[750px]  w-[285px] h-[160px] shadow-main border-DarkBlack border-[3px] border-solid">
          <p className="font-bold text-[16px] leading-[20.68px]">
            {!state.isItRed ? "PLAYER1" : "PLAYER2"}
          </p>
          <h1 className="font-bold text-[56px] leading-[71.68px]">WINS</h1>
          <div
            onClick={() => {
              dispatcher({ type: "RESTART", payload: true });
              dispatch({ type: "main/playAgain" });
            }}
            className="cursor-pointer w-[130px] rounded-[25px] h-[40px] flex justify-center  items-center bg-DarkPurple"
          >
            <p className="font-bold text-[16px] leading-[20.68px]  text-PureWhite">
              PLAY AGAIN
            </p>
          </div>
        </div>
      ) : (
        <div
          className={`${
            !state.isItRed ? "bg-MediumYellow" : "bg-LightRed"
          } absolute  rounded-t-[50px] flex justify-center items-center pt-[10px] flex-col left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-40 top-[640px]  sm:top-[900px] littleMore  xl:top-[750px]  w-[191px] h-[150px] shadow-main border-DarkBlack border-[3px] border-solid`}
        >
          <p className="font-bold text-[16px] leading-[20.68px]">
            {!state.isItRed ? "PLAYER 2'S TURN" : "PLAYER 1'S TURN"}
          </p>
          <h1 className="font-bold text-[56px] leading-[71.68px]">
            {state.time}s
          </h1>
        </div>
      )}
    </>
  );
};

export default GamePlayersTimerAndWinnerCard;
