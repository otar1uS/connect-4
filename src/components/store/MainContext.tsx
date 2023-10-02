import React, { createContext, useReducer } from "react";
import {
  ContextProviderProps,
  initialStateProps,
  actionProps,
} from "../interfaces/AllInterface";

// import CounterRedLarge from "../../assets/images/counter-red-large.svg";
// import CounterRedSmall from "../../assets/images/counter-red-small.svg";
// import CounterYellowLarge from "../../assets/images/counter-yellow-large.svg";
// import CounterYellowSmall from "../../assets/images/counter-yellow-small.svg";

const initialState: initialStateProps = {
  isGameRulesOn: false,
  isGameStarted: false,
  nextPlayersTurn: false,
  whoWon: "",
  time: 30,
  isItRed: true,
  player1Score: 0,
  player2Score: 0,
};

const MainContextReducer = (state: initialStateProps, action: actionProps) => {
  switch (action.type) {
    case "main/gameRulesOn":
      return { ...state, isGameRulesOn: !state.isGameRulesOn };

    case "main/gameStarted":
      return { ...state, isGameStarted: !state.isGameStarted };

    case "main/time":
      return {
        ...state,
        time: action.payload ? action.payload : state.time - 1,
      };
    case "main/nextPlayersTurn":
      return {
        ...state,
        nextPlayersTurn: !state.nextPlayersTurn,
      };

    case "main/whoWon":
      return { ...state, whoWon: action.payload };
    case "main/isItRed":
      return { ...state, isItRed: !state.isItRed };
    case "main/player1":
      return { ...state, player1Score: state.player1Score + 1 };
    case "main/player2":
      return { ...state, player2Score: state.player2Score + 1 };
    case "main/draw":
      return state;

    case "main/playAgain":
      return {
        ...state,
        isGameRulesOn: false,
        isGameStarted: false,
        nextPlayersTurn: false,
        whoWon: "",
        time: 30,
        isItRed: true,
        player1Score: state.player1Score,
        player2Score: state.player2Score,
      };

    case "main/restart":
      return initialState;

    default:
      return initialState;
  }
};

export const MainContext = createContext<{
  state: initialStateProps;
  dispatch: React.Dispatch<actionProps>;
  // eslint-disable-next-line @typescript-eslint/no-empty-function
}>({ state: initialState, dispatch: () => {} });

const MainContextProvider: React.FC<ContextProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(
    MainContextReducer as React.Reducer<initialStateProps, actionProps>,
    initialState
  );

  return (
    <MainContext.Provider value={{ state, dispatch }}>
      {children}
    </MainContext.Provider>
  );
};

export { MainContextProvider };
