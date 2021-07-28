import { TASKS_LIST_RECIEVED } from './tasks.actions.js';

const initialState = {
  tasksList: [],
};

const tasksReducer = (state = initialState, action) => {
  switch (action.type) {
    case TASKS_LIST_RECIEVED:
      return {
        ...state,
        tasksList: action.payload.tasksList,
      };
    default:
      return state;
  }
};

export default tasksReducer;
