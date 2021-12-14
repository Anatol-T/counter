import React from 'react';
import Button from "./Button";

type PropsType = {
  maxValue: number
  startValue: number
  setting: boolean
  err: boolean
  setMaxHandler: (max: number) => void
  setStartHandler: (stVal: number) => void
  set: () => void
}
const SettingsScreen: React.FC<PropsType> = ({maxValue, startValue, ...props}) => {
  const stl = props.err
    ? {border: "5px solid red", backgroundColor: "pink"}
    : {border: "5px solid skyblue"}
  return (
    <div className="Screen">
      <div className="settingsDisplay">
        <div className="inputSet">
          <p className="inputText">max value:&#160; &#160;</p>
          <input
            className="input" type="number" value={maxValue}
            style={stl}
            onKeyPress={(e) => e.preventDefault()}
            onChange={(e) => {
              props.setMaxHandler(+e.currentTarget.value)
            }}/>
        </div>
        <div className="inputSet">
          <p className="inputText">start value: &#160; &#160;</p>
          <input
            className="input" type="number" value={startValue}
            style={stl}
            onKeyPress={(e) => e.preventDefault()}
            onChange={(e) => {
              props.setStartHandler(+e.currentTarget.value)
            }}/>
        </div>
      </div>
      <div className="buttonsSet">
        <Button className="button"
                onClick={props.set}
                disabled={!props.setting}
        >set</Button>

      </div>
    </div>
  );
};

export default SettingsScreen;