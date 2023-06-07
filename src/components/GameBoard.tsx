import BoardImageFrontLarge from "../assets/images/board-layer-white-large.svg";
import BoardImageBackLarge from "../assets/images/board-layer-black-large.svg";
import BoardImageFrontSmall from "../assets/images/board-layer-white-small.svg";
import BoardImageBackSmall from "../assets/images/board-layer-black-small.svg";
import MarkRed from "../assets/images/marker-red.svg";
import RedBallLarge from "../assets/images/counter-red-large.svg";
import YellowBallLarge from "../assets/images/counter-yellow-large.svg";
import MarkYellow from "../assets/images/marker-yellow.svg";
import { useEffect, useState } from "react";

const GameBoard = () => {
  const [isItSmall, setIsItSmall] = useState<boolean>();
  const [valueOfCursor, setValueOfCursor] = useState<number>();
  const [hoveredTileIndex, setHoveredTileIndex] = useState<number | null>(null);
  const [ballPositions, setBallPositions] = useState<Array<[number, number]>>(
    []
  );
  const [isRedBall, setIsRedBall] = useState<boolean>(true);
  const [isRedPlayer, setIsRedPlayer] = useState<boolean>(true);

  // Creating 6 row 7 column squares
  const tiles = new Array(6).fill("").map(() => new Array(7).fill(""));

  useEffect(() => {
    const handleResize = () => {
      const screenSize = window.innerWidth < 640 ? true : false;
      setIsItSmall(screenSize);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    switch (hoveredTileIndex) {
      case 0:
        setValueOfCursor(-267);
        break;
      case 1:
        setValueOfCursor(-177);
        break;
      case 2:
        setValueOfCursor(-87);
        break;
      case 3:
        setValueOfCursor(0);
        break;
      case 4:
        setValueOfCursor(87);
        break;
      case 5:
        setValueOfCursor(177);
        break;
      case 6:
        setValueOfCursor(267);
        break;
      default:
        setValueOfCursor(0);
    }
  }, [hoveredTileIndex]);

  const dropBall = (col: number, isRed: boolean) => {
    const row = findDropRow(col);
    if (row !== -1) {
      setBallPositions([...ballPositions, [row, col]]);
      setIsRedBall(isRed);
      setIsRedPlayer((toggle) => !toggle);
    }
  };
  const findDropRow = (col: number) => {
    for (let row = 5; row >= 0; row--) {
      if (!ballPositions.some(([r, c]) => r === row && c === col)) {
        return row;
      }
    }
    return -1; // Column is full, no valid row
  };

  return (
    <div className="relative w-full flex justify-center">
      <img
        src={!isItSmall ? BoardImageFrontLarge : BoardImageFrontSmall}
        alt="Board Image"
        className="absolute z-20"
      />
      <img
        src={!isItSmall ? BoardImageBackLarge : BoardImageBackSmall}
        alt="Board Image"
        className="absolute z-0"
      />
      <img
        src={MarkYellow}
        alt="marker"
        className="absolute"
        style={{
          marginTop: "-36px",
          transform: `translateX(${valueOfCursor}px)`,
        }}
      />
      <div className="grid grid-rows-6 grid-cols-7  absolute  w-[335px] h-[310px] sm:w-[632px] sm:h-[536px]  z-[80]">
        {tiles.map((row, i) =>
          row.map((_, j) => (
            <div
              className="cursor-pointer  "
              onMouseEnter={() => setHoveredTileIndex(j)}
              onMouseLeave={() => setHoveredTileIndex(null)}
              key={i + "-" + j}
              onClick={() => dropBall(j, isRedPlayer)}
            >
              {ballPositions.map(([row, col], index) => {
                if (col === j) {
                  const bottom = (5 - row) * 60 + index * 4;

                  return (
                    <img
                      key={index}
                      src={isRedPlayer ? RedBallLarge : YellowBallLarge}
                      alt={isRedBall ? "Red Ball" : "Yellow Ball"}
                      className="absolute z-20 ball-animation"
                      style={{ bottom: `${bottom}px` }}
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
