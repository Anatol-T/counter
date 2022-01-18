import {counterReducer, CounterStateType, incAC, resetAC} from "./counterReducer";

let startState: CounterStateType
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

 const  endState = counterReducer(startState, incAC())
  expect(endState.counter).toBe(2)
})

test("Counter should be reset", ()=>{

  const  endState = counterReducer(startState, resetAC())
  expect(endState.counter).toBe(0)
})