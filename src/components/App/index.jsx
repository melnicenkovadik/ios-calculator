import React from "react";
import menu from "./../assets/menu.jpg";
import { Button } from "../Button/index";
import showResult from "../../utils/showResult";
import "./App.css";
import { useCalc } from "../../hooks/useCalc";

export const App = () => {
  const { value, handleButtonPress, time, mr } = useCalc();
  return (
    <div className="App">
      <div className="top">
        <div className="time">
          {time
            .getHours()
            .toString()
            .padStart(2, "0")}:
          {time
            .getMinutes()
            .toString()
            .padStart(2, "0")}
        </div>
        <div className="menu">
          <img src={menu} alt="menu"/>
        </div>
      </div>
      <div className="display">{showResult(value)}</div>
      <div className="buttons">
        <Button onButtonClick={handleButtonPress} content="AC" type="grey"/>
        <Button onButtonClick={handleButtonPress} content="±" type="grey"/>
        <Button onButtonClick={handleButtonPress} content="%" type="grey"/>
        <Button onButtonClick={handleButtonPress} content="÷" type="right"/>

        <Button onButtonClick={handleButtonPress} content="mc"/>
        <Button onButtonClick={handleButtonPress} type={mr ? 'grey' : ''} content="mr"/>
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
        <Button onButtonClick={handleButtonPress} content="."/>
        <Button onButtonClick={handleButtonPress} content="=" type="right"/>
      </div>
      <div className="bottom"/>
    </div>
  );
};
