import { useEffect, useContext } from "react";
import { MainContext } from "./store/MainContext.tsx";

import {
  BoardImageFrontLarge,
  BoardImageBackLarge,
  BoardImageFrontSmall,
  BoardImageBackSmall,
  RedBallLarge,
  YellowBallLarge,
  MarkYellow,
  MarkRed,
} from "../assets/images/images.ts";
import { GameContext } from "./store/GameContext.tsx";
import GameMenu from "./GameMenu.tsx";

const GameBoard: React.FC = () => {
  const { state: curState, dispatch: dispatcher } = useContext(MainContext);
  const { state, dispatch } = useContext(GameContext);

  const {
    isItSmall,
    valueOfCursor,
    hoveredTileIndex,
    redBallPositions,
    yellowBallPositions,
    isRedPlayer,
  } = state;

  useEffect(() => {
    if (curState.time === 0) {
      dispatch({
        type: "CHANGE_PLAYER",
        payload: { status: isRedPlayer ? false : true, game: true },
      });
      dispatcher({ type: "main/isItRed" });
    }
  }, [curState.time]);

  useEffect(() => {
    if (state.isItWinOrDraw) {
      if (state.isItWinOrDraw === "red") {
        dispatcher({ type: "main/player1" });
      } else if (state.isItWinOrDraw === "yellow") {
        dispatcher({ type: "main/player2" });
      } else {
        dispatcher({ type: "main/draw" });
      }
    }
    if (!state.isItWinOrDraw) {
      if (!state.changePlayer) {
        dispatcher({ type: "main/nextPlayersTurn" });
        dispatch({ type: "CHANGE_PLAYER", payload: { game: false } });
      }
      dispatcher({ type: "main/time", payload: 30 });
    }
  }, [state.isRedPlayer, dispatcher, state.isItWinOrDraw]);
  useEffect(() => {
    if (state.isItWinOrDraw) {
      dispatcher({ type: "main/whoWon", payload: state.isItWinOrDraw });
      dispatch({ type: "GAME_PAUSE" });
    }
    return () => dispatcher({ type: "main/whoWon", payload: "" });
  }, [state.isItWinOrDraw, dispatcher]);

  const tiles = new Array(6).fill("").map(() => new Array(7).fill(""));

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 640px)");

    const handleSizeChange = (e: MediaQueryListEvent | MediaQueryList) => {
      if (e.matches) {
        dispatch({ type: "RESIZE", payload: true });
      } else {
        dispatch({ type: "RESIZE", payload: false });
      }
    };

    mediaQuery.addListener(handleSizeChange);

    handleSizeChange(mediaQuery);

    return () => {
      mediaQuery.removeListener(handleSizeChange);
    };
  }, [dispatch]);

  useEffect(() => {
    switch (hoveredTileIndex) {
      case 0:
        dispatch({ type: "SET_CURSOR_VALUE", payload: -267 });
        break;
      case 1:
        dispatch({ type: "SET_CURSOR_VALUE", payload: -177 });
        break;
      case 2:
        dispatch({ type: "SET_CURSOR_VALUE", payload: -87 });
        break;
      case 3:
        dispatch({ type: "SET_CURSOR_VALUE", payload: 0 });
        break;
      case 4:
        dispatch({ type: "SET_CURSOR_VALUE", payload: 87 });
        break;
      case 5:
        dispatch({ type: "SET_CURSOR_VALUE", payload: 177 });
        break;
      case 6:
        dispatch({ type: "SET_CURSOR_VALUE", payload: 267 });
        break;
      default:
        dispatch({ type: "SET_CURSOR_VALUE", payload: 0 });
    }
  }, [hoveredTileIndex]);

  const dropBall = (col: number, isRed: boolean) => {
    const row = findDropRow(col);
    if (!state.isItWinOrDraw) {
      dispatcher({ type: "main/isItRed" });
    }

    if (row !== -1) {
      dispatch({ type: "DROP_BALL", payload: [row, col], isRedBall: isRed });
    }
  };

  useEffect(() => {
    if (curState.time === 0) {
      // Switch to the next player
      dispatch({ type: "CHANGE_PLAYER" });

      // Do not drop a ball, as the player did not make a move
    }
  }, [curState.time, dispatch]);
  const findDropRow = (col: number) => {
    for (let row = 5; row >= 0; row--) {
      if (
        !redBallPositions.some(([r, c]) => r === row && c === col) &&
        !yellowBallPositions.some(([r, c]) => r === row && c === col)
      ) {
        return row;
      }
    }
    return -1;
  };

  return (
    <div className="relative w-full flex justify-center">
      <img
        src={!isItSmall ? BoardImageFrontLarge : BoardImageFrontSmall}
        alt="Board Image"
        className="absolute  z-20"
      />
      <img
        src={!isItSmall ? BoardImageBackLarge : BoardImageBackSmall}
        alt="Board Image"
        className="absolute 
         z-0"
      />
      {!isItSmall && (
        <img
          src={state.isRedPlayer ? MarkRed : MarkYellow}
          alt="marker"
          className="absolute"
          style={{
            marginTop: "-36px",
            transform: `translateX(${valueOfCursor}px)`,
          }}
        />
      )}
      <div
        className={`grid grid-rows-6 ${
          !isItSmall
            ? "pt-[5px] pr-[5.5px] pl-[7px]"
            : "pb-[25px] pl-[3px] pr-[3px]"
        }  grid-cols-7 absolute w-[335px] h-[310px] sm:w-[632px] sm:h-[536px]  z-[80]`}
      >
        {state.openMenu && <GameMenu />}

        {tiles.map((row, i) =>
          row.map((_, j) => (
            <div
              className="cursor-pointer flex justify-center items-center  "
              onMouseEnter={() =>
                dispatch({ type: "HOVERED_TILE_INDEX", payload: j })
              }
              onMouseLeave={() =>
                dispatch({ type: "HOVERED_TILE_INDEX", payload: null })
              }
              key={i + "-" + j}
              onClick={() => dropBall(j, isRedPlayer)}
            >
              {redBallPositions.map(([rowPos, colPos], index) => {
                if (colPos === j && rowPos === i) {
                  return (
                    <img
                      key={index}
                      src={RedBallLarge}
                      alt="Red Ball"
                      className={`ball-animation  ${
                        !isItSmall ? "w-[75px] h-[70px]" : "w-[40px] h-[45px]"
                      } `}
                    />
                  );
                }
                return null;
              })}

              {yellowBallPositions.map(([rowPos, colPos], index) => {
                if (colPos === j && rowPos === i) {
                  return (
                    <img
                      key={index}
                      src={YellowBallLarge}
                      alt="Yellow Ball"
                      className={`ball-animation  ${
                        !isItSmall ? "w-[75px] h-[70px]" : "w-[40px] h-[45px]"
                      } `}
                    />
                  );
                }
                return null;
              })}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default GameBoard;
