import { INCREMENT, DECREMENT, RESET } from "./types";

const counter = {
  increment: () => ({
    type: INCREMENT
  }),
  decrement: () => ({
    type: DECREMENT
  }),
  reset: () => ({
    type: RESET
  })
}

export default counter;