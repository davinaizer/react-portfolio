import { GET_WORK_BY_ID, GET_WORK_LIST } from './types';

const filterAll = payload => ({
    type: GET_WORK_LIST,
    payload,
});

const filterById = payload => ({
    type: GET_WORK_BY_ID,
    payload,
});

const getWorkByIdAction = id => (dispatch, getState) => {
    const workItem = getState().config.workList[id];
    dispatch(filterById(workItem));
};

export default { getWorkByIdAction };
