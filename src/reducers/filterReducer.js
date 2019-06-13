import { GET_WORK_BY_ID } from '../actions/types';

const initialState = {
    filteredWorks: {},
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORK_BY_ID:
            return {
                ...state,
                filteredWorks: action.payload,
            };

        default:
            return state;
    }
};

export default filterReducer;
