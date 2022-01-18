import React from 'react';
import './App.css';
import SettingsScreen from "./components/SettingsScreen";
import Screen from "./components/Screen";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
  CounterStateType,
  incCounterAC,
  resetCounterAC,
  setRunMode,
  setErrorModeAC,
  setMaxCountAC,
  setStartCountAC
} from "./redux/counterReducer";


function App() {

  const {counter, maxCount, startCount, setting, err, message} =
    useSelector<AppStateType, CounterStateType>(state=> state.counterState)

  const dispatch = useDispatch()

  const setMaxHandler = (newMax: number) => {
    if (newMax >= 0) {
      dispatch(setMaxCountAC(newMax))
    } else {
      dispatch(setErrorModeAC())
    }
  }

  const setStartHandler = (newStart: number) => {
    if (newStart >= 0 ) {
      dispatch(setStartCountAC(newStart))
    } else {
      dispatch(setErrorModeAC())
    }
  }

  const inc = () => {
    if (counter < maxCount) {
      dispatch(incCounterAC())
    }
  }

  const reset = () => {
    dispatch(resetCounterAC())
  }

  const set = () => {
    if ( maxCount >= startCount) {
      dispatch(setRunMode())
    } else {
      dispatch(setErrorModeAC())
    }
  }

  return (
    <div className="Main">
      <SettingsScreen
        maxValue={maxCount}
        startValue={startCount}
        setting={setting}
        err={err}
        setMaxHandler={setMaxHandler}
        setStartHandler={setStartHandler}
        set={set}
      />
      <Screen
        counter={counter}
        message={message}
        maxCount={maxCount}
        startCount={startCount}
        setting={setting}
        inc={inc}
        reset={reset}
      />
    </div>
  );
}

export default App;
