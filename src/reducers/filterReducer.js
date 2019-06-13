import { GET_WORK_BY_ID } from '../actions/types';

const initialState = {
    workItem: { title: '', description: '', images: [], links: '', tags: '' },
};

const filterReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_WORK_BY_ID:
            return {
                ...state,
                workItem: action.payload,
            };

        default:
            return state;
    }
};

export default filterReducer;
