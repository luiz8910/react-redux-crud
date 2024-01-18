import {
  FETCH_DATA,
  ADD_DATA,
  UPDATE_DATA,
  DELETE_DATA,
} from "../actions/types";

const initialState = {
  items: [],
};

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        items: action.payload,
      };

    case ADD_DATA:
      return {
        ...state,
        items: [...state.items, action.payload],
      };

    case UPDATE_DATA:
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };

    case DELETE_DATA:
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    default:
      return state;
  }
};

export default dataReducer;
