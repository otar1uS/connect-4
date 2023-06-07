import React, { createContext, useState, useContext } from "react";
import {
  MainContextProps,
  MainContextProviderProps,
} from "../interfaces/AllInterface";

import CounterRedLarge from "../../assets/images/counter-red-large.svg";
import CounterRedSmall from "../../assets/images/counter-red-small.svg";
import CounterYellowLarge from "../../assets/images/counter-yellow-large.svg";
import CounterYellowSmall from "../../assets/images/counter-yellow-small.svg";

export const MainContext = createContext<MainContextProps>({
  isGameRulesOn: false,
  openHandler: () => {
    return true;
  },
  closeHandler: () => {
    return false;
  },
});

const MainContextProvider: React.FC<MainContextProviderProps> = ({
  children,
}) => {
  //  GameRules Open and close toggler events
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setIsOpen(true);
  };

  const closeHandler = () => {
    setIsOpen(false);
  };

  // GameBoard logic

  return (
    <MainContext.Provider
      value={{ isGameRulesOn: isOpen, openHandler, closeHandler }}
    >
      {children}
    </MainContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(MainContext);
};

export { MainContextProvider, useGlobalContext };
