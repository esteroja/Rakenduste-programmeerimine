import React from "react";
import { createContext, useState, useContext } from "react";

export const WeatherContext = createContext(null);

const Context = () => { // komponent
  const [weather, setWeather] = useState("🌞");

  const changeWeather = () => setWeather("🌧️");

  return (
    <WeatherContext.Provider value={{ weather, changeWeather }}>
      <Europe />
    </WeatherContext.Provider>
  );
};

const Europe = () => { // komponent
  return <Estonia />;
};

const Estonia = () => { // komponent
  return <Tallinn />;
};

const Tallinn = () => { // komponent
  const { weather, changeWeather } = useContext(WeatherContext);

  return <div onClick={changeWeather}>{weather}</div>;
};

export default Context;
