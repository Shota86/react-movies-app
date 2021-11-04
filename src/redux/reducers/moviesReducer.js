import { SET_MOVIES } from "../actions/actionTypes";

const initialState = {
  totalAmount: 0,
  data: [],
  offset: 0,
  limit: 0,
};

const moviesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MOVIES:
      return {
        ...state,
        ...action.payload,
      };    
    default:
      return state;
  }
};

export default moviesReducer;