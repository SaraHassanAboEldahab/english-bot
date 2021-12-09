import React, { useEffect, useState } from "react";
import axios from "axios";

//here we create context object
const Context = React.createContext();

export const DataContext = ({ children }) => {
  const [newData, setNewData] = useState({});
  const fetchData = async () => {
    // const { data } = await axios.get(`/api/bot/${window.botSettings.id}`);
    // const { data } = await axios.get(
    //   `https://chat-plugv1.herokuapp.com/api/bot/614e63e0632c5bf001304b56?fbclid=IwAR2yTQqEV0CooA_1o3IUj0GyUgRTx00PpYFA9V_dBBphDn7wDowCsX6ZVVA`
    // );
    const { data } = await axios.get(
      "https://english-bot-test.herokuapp.com/api/bot-flow"
    );
    setNewData(data);
  };
  useEffect(() => {
    fetchData();
    console.log(">>>>>", newData);
  }, []);

  return <Context.Provider value={newData}>{children}</Context.Provider>;
};

export default Context;
