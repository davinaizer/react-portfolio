import { GET_WORK_BY_ID } from './types';

const filterById = payload => ({
    type: GET_WORK_BY_ID,
    payload,
});

const getWorkByIdAction = id => (dispatch, getState) => {
    const workItem = getState().config.works[id];
    dispatch(filterById(workItem));
};

export default getWorkByIdAction;
