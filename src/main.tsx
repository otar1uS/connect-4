import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { MainContextProvider } from "./components/store/MainContext.tsx";
import { GameContextProvider } from "./components/store/GameContext.tsx";
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <BrowserRouter>
      <MainContextProvider>
        <GameContextProvider>
          <App />
        </GameContextProvider>
      </MainContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
