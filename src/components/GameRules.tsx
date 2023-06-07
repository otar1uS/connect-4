import CheckIcon from "../assets/images/icon-check.svg";
import { useGlobalContext } from "./store/Context";

const GameRulesModal = () => {
  const { isGameRulesOn, closeHandler } = useGlobalContext();

  return (
    <div
      className={`${
        isGameRulesOn
          ? "bg-DarkPurple w-full h-full  z-10 fixed  grid  place-items-center  inset-0 ease-linear  transition  delay-150"
          : "hidden"
      }`}
    >
      <article className="max-w-[335px] px-[20px] sm:px-[34px] relative py-[30px] bg-PureWhite h-[618px]  sm:max-w-[480px] sm:h-[570px]   rounded-[40px] shadow-main border-DarkBlack border-[3px] border-solid  flex   items-center flex-col  ">
        <h1 className="uppercase font-bold text-[56px]  mb-[29px] leading-[71px]">
          rules
        </h1>
        <div className="mb-[33px]">
          <h2 className="text-LightPurple font-bold mb-[16px]  text-[20px] leading-6 uppercase">
            objective
          </h2>
          <p className="leading-[20px] font-medium  ">
            Be the first player to connect 4 of the same colored discs in a row
            (either vertically, horizontally, or diagonally).
          </p>
        </div>

        <div>
          <h2 className="text-LightPurple font-bold mb-[16px]  text-[20px] leading-6 uppercase">
            how to play
          </h2>
          <ol className="games-rules-modal-list">
            <li className="mb-[16px]  font-medium sm:mb-[10px] leading-5">
              <strong>1</strong> Red goes first in the first game.
            </li>
            <li className="mb-[16px] font-medium sm:mb-[10px] leading-5 ">
              <strong>2</strong> Players must alternate turns, and only one disc
              can be dropped in each turn.
            </li>
            <li className="mb-[16px] font-medium sm:mb-[10px] leading-5">
              <strong>3</strong> The game ends when there is a 4-in-a-row or a
              stalemate.
            </li>
            <li className="mb-[16px] font-medium sm:mb-[10px] leading-5">
              <strong>4</strong> The starter of the previous game goes second on
              the next game.
            </li>
          </ol>
        </div>

        <button className="absolute bottom-[-3rem]" onClick={closeHandler}>
          <svg
            width="70px"
            height="75px"
            viewBox="0 0 70 75"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            // xmlns:xlink="http://www.w3.org/1999/xlink"
            className="check-mark-icon"
          >
            <title>icon-check</title>
            <g
              id="Designs"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g id="icon-check">
                <circle
                  id="Oval-Copy-37"
                  fill="#000000"
                  cx="35"
                  cy="35"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-38"
                  fill="#000000"
                  cx="35"
                  cy="40"
                  r="35"
                ></circle>
                <circle
                  id="Oval-Copy-39"
                  fill="#FD6687"
                  cx="35"
                  cy="35"
                  r="32"
                ></circle>
                <polyline
                  id="Path"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  points="20 34.5819497 30.2640104 44.84596 50.1099704 25"
                ></polyline>
              </g>
            </g>
          </svg>
        </button>
      </article>
    </div>
  );
};

export default GameRulesModal;
