import React from 'react';
import './App.css';
import SettingsScreen from "./components/SettingsScreen";
import Screen from "./components/Screen";
import {useDispatch, useSelector} from "react-redux";
import {AppStateType} from "./redux/store";
import {
  CounterStateType,
  incAC,
  resetAC,
  setAC,
  setErrorMessageAC,
  setMaxCountAC,
  setStartCountAC
} from "./redux/counterReducer";

export type MessageType = "" | "select values and hit: Set" | "Incorrect Value!"

function App() {

  const {counter, maxCount, startCount, setting, err, message} =
    useSelector<AppStateType, CounterStateType>(state=> state.counter)

  const dispatch = useDispatch()


  // useEffect(()=>{
  //   let savedSettings = localStorage.getItem("counter settings");
  //   if (savedSettings) {
  //     savedSettings = JSON.parse(savedSettings)
  //   }
  //   if (savedSettings) {
  //     setMaxCount(+savedSettings[0])
  //     setStartCount(+savedSettings[1])
  //     setCounter(+savedSettings[1])
  //   }
  // },[])

  const setMaxHandler = (newMax: number) => {

    if (newMax >= 0) {
      dispatch(setMaxCountAC(newMax))
    } else {
      dispatch(setErrorMessageAC())
    }

  }
  const setStartHandler = (newStart: number) => {
    if (newStart >= 0 ) {
      dispatch(setStartCountAC(newStart))
    } else {
      dispatch(setErrorMessageAC())
    }
  }
  const inc = () => {
    if (counter < maxCount) {
      dispatch(incAC())
    }
  }
  const reset = () => {
    dispatch(resetAC())
  }

  const set = () => {
    if ( maxCount >= startCount) {
      // localStorage
      //   .setItem("counter settings", JSON.stringify([maxCount, startCount]))
      dispatch(setAC())
    } else {
      dispatch(setErrorMessageAC())
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
