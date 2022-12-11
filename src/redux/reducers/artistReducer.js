import { GET_ARTISTS } from "../actions";

const initialState = {
  data: [],
};

const artistReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ARTISTS:
      return {
        ...state,
        data: action.payload,
      };

    default:
      return state;
  }
};

export default artistReducer;