import { SET_WORKS, SET_IS_DATA_LOADED } from '../actions/types';

const initialState = {
  works: [],
  isDataLoaded: false,
};

const configReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_WORKS:
      return {
        ...state,
        works: action.payload,
      };

    case SET_IS_DATA_LOADED:
      return {
        ...state,
        isDataLoaded: action.payload,
      };
    default:
      return state;
  }
};

export default configReducer;
