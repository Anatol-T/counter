export type MessageType = "" | "select values and hit: Set" | "Incorrect Value!"

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
    case "SET-RUN-MODE":
      return {...state, counter: state.startCount, ...actions.payload}
    case "ERROR-MODE":
    case "SET-MAX":
    case "SET-START":
      return {...state, ...actions.payload}
    default:
      return state
  }
}

type ActionsType = IncACType | ResetACType | SetMaxCountACType
  | SetStartCountACType | SetErrorMessageACType | SetACType


export const incCounterAC = () => ({type: "INCREMENT"} as const)
type IncACType = ReturnType<typeof incCounterAC>

export const resetCounterAC = () =>({type: "RESET"} as const)
type ResetACType = ReturnType<typeof resetCounterAC>

export const setErrorModeAC = () => {
  return {
    type: "ERROR-MODE",
    payload: {
      setting: true,
      err: true,
      message: "Incorrect Value!",
    }
  } as const
}
type SetErrorMessageACType = ReturnType<typeof setErrorModeAC>

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
type SetMaxCountACType = ReturnType<typeof setMaxCountAC>

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
type SetStartCountACType = ReturnType<typeof setStartCountAC>

export const setRunMode = () => {
  return {
    type: "SET-RUN-MODE",
    payload: {
      setting: false,
      err: false,
      message: ""
    }
  } as const
}
type SetACType = ReturnType<typeof setRunMode>