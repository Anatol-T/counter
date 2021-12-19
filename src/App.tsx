import React, {useEffect, useState} from 'react';
import './App.css';
import SettingsScreen from "./components/SettingsScreen";
import Screen from "./components/Screen";

export type MessageTpe = "" | "select values and hit: Set" | "Incorrect Value!"

function App() {
console.log("test")
  const [counter, setCounter] = useState<number>(0);
  const [maxCount, setMaxCount] = useState<number>(5);
  const [startCount, setStartCount] = useState<number>(0)
  const [setting, setSetting] = useState<boolean>(false)
  const [err, setErr] = useState<boolean>(false)
  const [message, setMessage] = useState<MessageTpe>('')

  useEffect(()=>{
    let savedSettings = localStorage.getItem("counter settings");
    if (savedSettings) {
      savedSettings = JSON.parse(savedSettings)
    }
    if (savedSettings) {
      setMaxCount(+savedSettings[0])
      setStartCount(+savedSettings[1])
      setCounter(+savedSettings[1])
    }
  },[])

  const setMaxHandler = (max: number) => {
    setSetting(true)
    if (max >= startCount) {
      setMaxCount(max)
      setErr(false)
      setMessage("select values and hit: Set")
    } else {
      setErr(true)
      setMessage("Incorrect Value!")
    }

  }
  const setStartHandler = (stVal: number) => {
    setSetting(true)
    if (stVal >= 0 && stVal <= maxCount) {
      setStartCount(stVal)
      setErr(false)
      setMessage("select values and hit: Set")
    } else {
      setErr(true)
      setMessage("Incorrect Value!")
    }
  }
  const inc = () => {
    if (counter < maxCount) {
      setCounter(counter + 1)
    }
  }
  const reset = () => {
    if (counter > 0) setCounter(startCount)
  }
  const set = () => {
    setSetting(false)
    setCounter(startCount)
    setErr(false)
    setMessage('')
    localStorage
      .setItem("counter settings", JSON.stringify([maxCount, startCount]))
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
