import { Link } from "react-router-dom";
import { useContext } from "react";
import { MainContext } from "../store/MainContext";
import GameRulesModal from "../GameRules";
import { Logo, PVP } from "../../assets/images/images";

const Home = () => {
  const { dispatch } = useContext(MainContext);
  return (
    <>
      <div className="w-full h-screen flex justify-center items-center bg-DarkPurple     ">
        <div className="w-full  h-full sm:max-w-[480px] sm:h-[435px]   sm:rounded-[40px] sm:shadow-main sm:border-DarkBlack sm:border-[3px] sm:border-solid  flex justify-center radius items-center flex-col bg-LightPurple  ">
          <img src={Logo} alt="Logo" className="w-[52px]  h-[52px] mb-[79px]" />
          <Link to={"/game"}>
            <div className="min-w-[335px] sm:min-w-[400px]  h-[72px] font-bold text-[24px] leading-[24px] bg-MediumYellow border-DarkBlack border-[3px] border-solid rounded-[20px] px-[20px] cursor-pointer hover:shadow-hover mb-[30px] shadow-main flex  justify-between items-center ">
              PLAY VS PLAYER <img src={PVP} alt="player vs player photo" />
            </div>
          </Link>
          <div
            onClick={() => dispatch({ type: "main/gameRulesOn" })}
            className="min-w-[335px] sm:min-w-[400px] h-[72px] font-bold text-[24px] leading-[24px] bg-PureWhite border-DarkBlack border-[3px] border-solid rounded-[20px] pl-[20px] cursor-pointer hover:shadow-hover  shadow-main flex  justify-start items-center"
          >
            GAME RULES
          </div>
        </div>
      </div>
      <GameRulesModal />
    </>
  );
};

export default Home;
