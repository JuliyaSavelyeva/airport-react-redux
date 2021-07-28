import { fetchTasksList, updateTask, deleteTask, createTask } from './tasksGateway.js';
import { tasksListSelector } from './tasks.selectors.js';

export const TASKS_LIST_RECIEVED = 'TASKS_LIST_RECIEVED';

export const tasksListRecieved = tasksList => ({
  type: TASKS_LIST_RECIEVED,
  payload: {
    tasksList,
  },
});

export const getTasksList = () => {
  return function (dispatch) {
    fetchTasksList().then(tasksList => dispatch(tasksListRecieved(tasksList)));
  };
};

export const updateOneTask = taskId => {
  return function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksListSelector(state);
    const { done, text } = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      text,
      done: !done,
    };

    updateTask(taskId, updatedTask).then(() => dispatch(getTasksList()));
  };
};

export const deleteOneTask = taskId => {
  return function (dispatch) {
    deleteTask(taskId).then(() => dispatch(getTasksList()));
  };
};

export const createOneTask = text => {
  return function (dispatch) {
    const newTask = {
      text,
      done: false,
      createDate: new Date().toISOString(),
    };

    createTask(newTask).then(() => dispatch(getTasksList()));
  };
};
