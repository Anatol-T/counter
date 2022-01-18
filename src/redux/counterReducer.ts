import {MessageType} from "../App";

export type CounterStateType = typeof initialState;
const initialState = {
  counter: 0,
  maxCount: 5,
  startCount: 0,
  setting: false,
  err: false,
  message: '' as MessageType
}

export const counterReducer = (state: CounterStateType = initialState, actions: ActionsType): CounterStateType => {
  switch (actions.type) {
    case "INCREMENT":
      return {...state, counter: state.counter + 1}
    case "RESET":
      return {...state, counter: state.startCount}
    case "SET":
      return {...state, counter: state.startCount, ...actions.payload}
    case "ERR-MESSAGE":
      return {...state, ...actions.payload}
    case "SET-MAX":
      return {...state, ...actions.payload}
    case "SET-START":
      return {...state, ...actions.payload}
    default:
      return state
  }
}

type ActionsType = IncACType | ResetACType | SetMaxCountACType
  | SetStartCountACType | SetErrorMessageACType | SetACType

type IncACType = ReturnType<typeof incAC>
export const incAC = () => ({type: "INCREMENT"} as const)

type ResetACType = ReturnType<typeof resetAC>
export const resetAC = () => {
  return {
    type: "RESET"
  } as const
}

type SetErrorMessageACType = ReturnType<typeof setErrorMessageAC>
export const setErrorMessageAC = () => {
  return {
    type: "ERR-MESSAGE",
    payload: {
      setting: true,
      err: true,
      message: "Incorrect Value!",
    }
  } as const
}

type SetMaxCountACType = ReturnType<typeof setMaxCountAC>
export const setMaxCountAC = (newMax: number) => {
  return {
    type: "SET-MAX",
    payload: {
      setting: true,
      maxCount: newMax,
      err: false,
      message: "select values and hit: Set",
    }
  } as const
}

type SetStartCountACType = ReturnType<typeof setStartCountAC>
export const setStartCountAC = (newStart: number) => {
  return {
    type: "SET-START",
    payload: {
      setting: true,
      startCount: newStart,
      err: false,
      message: "select values and hit: Set",
    }
  } as const
}

export const setAC = () => {
  return {
    type: "SET",
    payload: {
      setting: false,
      err: false,
      message: ""
    }
  } as const
}
type SetACType = ReturnType<typeof setAC>