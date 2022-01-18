import {
  counterReducer,
  CounterStateType,
  incCounterAC,
  resetCounterAC,
  setErrorModeAC, setMaxCountAC,
  setRunMode, setStartCountAC
} from "./counterReducer";

let startState: CounterStateType;
beforeEach(()=>{
  startState = {
    counter: 1,
    maxCount: 5,
    startCount: 0,
    setting: false,
    err: false,
    message: ''
  }
})
test("Counter should be incremented", ()=>{

 const  endState = counterReducer(startState, incCounterAC())
  expect(endState.counter).toBe(2)
})

test("Counter should be reset", ()=>{

  const  endState = counterReducer(startState, resetCounterAC())
  expect(endState.counter).toBe(0)
})

test("Max value should be set", ()=>{

  const  endState = counterReducer(startState, setMaxCountAC(10))
  expect(endState.maxCount).toBe(10)
  expect(endState.setting).toBeTruthy()
  expect(endState.message).toBe("select values and hit: Set")
})

test("Start value should be set", ()=>{

  const  endState = counterReducer(startState, setStartCountAC(3))
  expect(endState.startCount).toBe(3)
  expect(endState.setting).toBeTruthy()
  expect(endState.message).toBe("select values and hit: Set")
})

test("Error mode should be set", ()=>{

  const  endState = counterReducer(startState, setErrorModeAC())
  expect(endState.err).toBeTruthy()
  expect(endState.setting).toBeTruthy()
  expect(endState.message).toBe("Incorrect Value!")
})

test("Run mode should be set", ()=>{

  const startState = {
    counter: 1,
    maxCount: 5,
    startCount: 0,
    setting: true,
    err: true,
    message: 'select values and hit: Set'
  } as const

  const  endState = counterReducer(startState, setRunMode())
  expect(endState.err).toBeFalsy()
  expect(endState.setting).toBeFalsy()
  expect(endState.counter).toBe(0)
  expect(endState.message).toBe("")
})

