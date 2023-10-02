import {
  ContextProviderProps,
  State,
  actionProps,
} from "../interfaces/AllInterface.ts";
import checkForWin from "../GameWinConditions";
import { createContext, useReducer, Dispatch } from "react";

const initialState: State = {
  isItSmall: false,
  valueOfCursor: 0,
  hoveredTileIndex: null,
  redBallPositions: [],
  yellowBallPositions: [],
  isRedPlayer: true,
  isItWinOrDraw: "",
  gamePaused: false,
  changePlayer: false,
  openMenu: false,
};

const GameReducer = (state: State, action: actionProps): State => {
  switch (action.type) {
    case "RESIZE":
      return { ...state, isItSmall: action.payload };
    case "HOVERED_TILE_INDEX":
      return { ...state, hoveredTileIndex: action.payload };
    case "DROP_BALL":
      // eslint-disable-next-line no-case-declarations
      const isRedBall =
        action.isRedBall !== undefined ? action.isRedBall : false;

      // eslint-disable-next-line no-case-declarations
      const [row, col] = action.payload;

      // eslint-disable-next-line no-case-declarations
      const updatedRedBallPositions = isRedBall
        ? [...state.redBallPositions, [row, col]]
        : state.redBallPositions;

      // eslint-disable-next-line no-case-declarations
      const updatedYellowBallPositions = isRedBall
        ? state.yellowBallPositions
        : [...state.yellowBallPositions, [row, col]];

      // eslint-disable-next-line no-case-declarations
      const isWinner = checkForWin(
        row,
        col,
        state.redBallPositions,
        state.yellowBallPositions,
        isRedBall
      );

      if (state.gamePaused) {
        return state;
      }

      if (isWinner) {
        return {
          ...state,
          isItWinOrDraw: isWinner,
          redBallPositions: updatedRedBallPositions,
          yellowBallPositions: updatedYellowBallPositions,
          isRedPlayer: !state.isRedPlayer,
        };
      }

      return {
        ...state,
        redBallPositions: updatedRedBallPositions,
        yellowBallPositions: updatedYellowBallPositions,
        isRedPlayer: !state.isRedPlayer,
      };
    case "SET_CURSOR_VALUE":
      return { ...state, valueOfCursor: action.payload };
    case "GAME_PAUSE":
      return { ...state, gamePaused: !state.gamePaused };
    case "CHANGE_PLAYER":
      // eslint-disable-next-line no-case-declarations
      const { status, game } = action.payload || {};
      return {
        ...state,
        isRedPlayer: status !== undefined ? status : state.isRedPlayer,
        changePlayer: game !== undefined ? game : state.changePlayer,
      };

    case "OPEN_MENU":
      return { ...state, openMenu: !state.openMenu };

    case "RESTART":
      return {
        ...state,
        isItSmall: state.isItSmall,
        valueOfCursor: 0,
        hoveredTileIndex: null,
        redBallPositions: [],
        yellowBallPositions: [],
        isRedPlayer: true,
        isItWinOrDraw: "",
        gamePaused: false,
        changePlayer: false,
        openMenu: false,
      };

    default:
      return initialState;
  }
};

export const GameContext = createContext<{
  state: State;
  dispatch: Dispatch<actionProps>;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ state: initialState, dispatch: () => {} });

const GameContextProvider: React.FC<ContextProviderProps> = ({
  children,
}: ContextProviderProps) => {
  const [state, dispatch] = useReducer(GameReducer, initialState);

  return (
    <GameContext.Provider value={{ state, dispatch }}>
      {children}
    </GameContext.Provider>
  );
};

export { GameContextProvider };
