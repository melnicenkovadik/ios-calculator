import React, { useEffect, useState } from "react";

import Button from "../Button";
import "./App.css";
import menu from "../../assets/menu.jpg";
import { useCalculateState } from "./hooks/useCalculateState";
import showResult from "../consts/showResult";

const App = () => {
  const [time, setTime] = useState(new Date());
  const { value, handleButtonPress } = useCalculateState();

  useEffect(() => {
    setTime(new Date());
    // eslint-disable-next-line
  }, [new Date().getMinutes()]);

  return (
    <div className="App">
      <div className="top">
        <div className="time">
          {time
            .getHours()
            .toString()
            .padStart(2, "0")}
          :
          {time
            .getMinutes()
            .toString()
            .padStart(2, "0")}
        </div>
        <div className="menu">
          <img src={menu} className='menuItems' alt="menu"/>
        </div>
      </div>
      <div className="display">{showResult(value)}</div>
      <div className="buttons">
        <Button onButtonClick={handleButtonPress} content="AC" type="grey"/>
        <Button onButtonClick={handleButtonPress} content="±" type="grey"/>
        <Button onButtonClick={handleButtonPress} content="%" type="grey"/>
        <Button onButtonClick={handleButtonPress} content="÷" type="right"/>

        <Button onButtonClick={handleButtonPress} content="mc"/>
        <Button onButtonClick={handleButtonPress} content="mr"/>
        <Button onButtonClick={handleButtonPress} content="m-"/>
        <Button onButtonClick={handleButtonPress} content="m+" type="right"/>

        <Button onButtonClick={handleButtonPress} content="7"/>
        <Button onButtonClick={handleButtonPress} content="8"/>
        <Button onButtonClick={handleButtonPress} content="9"/>
        <Button onButtonClick={handleButtonPress} content="×" type="right"/>
        <Button onButtonClick={handleButtonPress} content="4"/>
        <Button onButtonClick={handleButtonPress} content="5"/>
        <Button onButtonClick={handleButtonPress} content="6"/>
        <Button onButtonClick={handleButtonPress} content="−" type="right"/>
        <Button onButtonClick={handleButtonPress} content="1"/>
        <Button onButtonClick={handleButtonPress} content="2"/>
        <Button onButtonClick={handleButtonPress} content="3"/>
        <Button onButtonClick={handleButtonPress} content="+" type="right"/>
        <Button onButtonClick={handleButtonPress} content="0"/>
        <Button onButtonClick={handleButtonPress} content=","/>
        <Button onButtonClick={handleButtonPress} content="=" type="right"/>
      </div>
      <div className="bottom"/>
    </div>
  );
};

export default App;
