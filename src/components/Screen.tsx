import React from 'react';
import Button from "./Button";

type PropsType = {
  counter: number
  message: string
  maxCount: number
  startCount: number
  setting: boolean
  inc: () => void
  reset: () => void
}
const Screen: React.FC<PropsType> =
  ({
     counter, maxCount, startCount, message,
     ...props
   }) => {
    const displayStl = message === "select values and hit: Set"
      ? {fontSize: "30px", color: "#383838"}
      : message === "Incorrect Value!"
        ? {fontSize: "30px", color: "red"}
        : {
          color: counter === maxCount ? "red" : "#383838",
          fontSize: "150px"
        }
    return (
      <div className="Screen">
        <div className="Display" style={displayStl}>
          <div className='message'>{message ? message : counter}</div>
        </div>
        <div className="buttonsSet">
          <Button
            className="button"
            onClick={props.inc}
            disabled={props.setting || counter === maxCount}
          >inc</Button>
          <Button
            className="button"
            onClick={props.reset}
            disabled={props.setting || counter === startCount}
          >reset</Button>
        </div>
      </div>
    );
  };

Screen.propTypes = {};

export default Screen;