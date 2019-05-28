import { INCREMENT, DECREMENT, RESET } from "../actions/types";

const INITIAL_STATE = {
  count: 0
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: state.count + 1
      };
    case DECREMENT:
      return {
        ...state,
        count: state.count - 1
      };
    case RESET:
      return {
        ...state,
        ...INITIAL_STATE
      };
    default:
      return state;
  }
};