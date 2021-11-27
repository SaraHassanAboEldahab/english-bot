import React from "react";
import Bot from "./components/Bot";
import { DataContext } from "./contexts/dataContext";

const App = () => {
  return (
    <DataContext>
      <Bot />
    </DataContext>
  );
};

export default App;
