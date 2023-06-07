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
export interface MainContextProviderProps {
  children: React.ReactNode;
}
