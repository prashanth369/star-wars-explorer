import * as actionTypes from "./actionTypes";
import { ActionTypeProps } from '../types';

const initialState = { title: "Star War Explorer" };

const reducer = (state = initialState, action: ActionTypeProps) => {
  switch (action.type) {
    case actionTypes.BUTTON_SELECTED:
      return { ...state, title: action.payload.title };
    default:
        return state;
  }
};

export default reducer; 