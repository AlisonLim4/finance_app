import React from "react";
import { BrowserRouter } from "react-router-dom";
import Rotas from "./Routes";
const App = () => {
  return (
    <BrowserRouter>
      <Rotas />
    </BrowserRouter>
  );
};

export default App;
