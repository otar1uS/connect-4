export interface Board {
  rows: Row[];
}
interface Column {
  player: number | null;
}
interface Row {
  columns: Column[];
}

export interface MainContextProps {
  isGameRulesOn: boolean;
  openHandler: () => void;
  closeHandler: () => void;
}
export interface ContextProviderProps {
  children: React.ReactNode;
}

export interface initialStateProps {
  isGameRulesOn: boolean;
  isGameStarted: boolean;
  nextPlayersTurn: boolean;
  whoWon: string;
  time: number;
  isItRed: boolean;
  player1Score: number;
  player2Score: number;
}

export type actionProps = {
  type: string;
  payload?: any;
  isRedBall?: boolean;
};

export type State = {
  isItSmall: boolean;
  valueOfCursor: number;
  hoveredTileIndex: number | null;
  redBallPositions: [number, number][] | any[];
  yellowBallPositions: [number, number][] | any[];
  isRedPlayer: boolean;
  isItWinOrDraw: string | boolean;
  gamePaused: boolean;
  changePlayer: boolean;
  openMenu: boolean;
};
