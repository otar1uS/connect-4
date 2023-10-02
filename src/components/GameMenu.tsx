import { useContext } from "react";
import { Link } from "react-router-dom";
import { GameContext } from "./store/GameContext";
import { MainContext } from "./store/MainContext";

const GameMenu = () => {
  const { dispatch } = useContext(GameContext);
  const { dispatch: dispatcher } = useContext(MainContext);

  return (
    <div className=" fixed top-0 left-0  bg-grayColor w-full h-full flex justify-center items-center  z-[999]    ">
      <div className="w-full  h-full sm:max-w-[480px] sm:h-[435px]   sm:rounded-[40px] sm:shadow-main sm:border-DarkBlack sm:border-[3px] sm:border-solid  flex justify-center radius items-center flex-col bg-LightPurple  ">
        <div
          onClick={() => dispatch({ type: "OPEN_MENU" })}
          className="min-w-[335px] sm:min-w-[400px]  h-[72px] font-bold text-[24px] leading-[24px] bg-PureWhite border-DarkBlack border-[3px] border-solid rounded-[20px] px-[20px] cursor-pointer hover:shadow-hover mb-[30px] shadow-main flex  justify-between items-center "
        >
          CONTINUE GAME
        </div>
        <div
          onClick={() => {
            dispatch({ type: "RESTART" });
            dispatcher({ type: "main/restart" });
          }}
          className="min-w-[335px] sm:min-w-[400px]  h-[72px] font-bold text-[24px] leading-[24px] bg-PureWhite border-DarkBlack border-[3px] border-solid rounded-[20px] px-[20px] cursor-pointer hover:shadow-hover mb-[30px] shadow-main flex  justify-between items-center "
        >
          RESTART
        </div>
        <Link to={"/"}>
          <div
            onClick={() => {
              dispatch({ type: "OPEN_MENU" });
              dispatch({ type: "RESTART" });
              dispatcher({ type: "main/restart" });
            }}
            className="min-w-[335px] sm:min-w-[400px]  h-[72px] font-bold text-[24px] leading-[24px] bg-LightRed border-DarkBlack border-[3px] border-solid rounded-[20px] px-[20px] cursor-pointer hover:shadow-hover mb-[30px] shadow-main flex  justify-between items-center "
          >
            QUITE GAME
          </div>
        </Link>
      </div>
    </div>
  );
};

export default GameMenu;
