import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Task from './Task.jsx';
import CreateTaskInput from './CreateTaskInput.jsx';
import * as tasksActions from '../tasks.actions.js';
import { sortedTaskListSelector } from '../tasks.selectors.js';

class TasksList extends React.Component {
  componentDidMount() {
    this.props.getTasksList();
  }

  render() {
    return (
      <main className="todo-list">
        <CreateTaskInput onCreate={this.props.createTask} />
        <ul className="list">
          {this.props.tasks.map(task => (
            <Task
              key={task.id}
              {...task}
              onChange={this.props.updateTask}
              onDelete={this.props.deleteTask}
            />
          ))}
        </ul>
      </main>
    );
  }
}

TasksList.propTypes = {
  getTasksList: PropTypes.func.isRequired,
  updateTask: PropTypes.func.isRequired,
  deleteTask: PropTypes.func.isRequired,
  createTask: PropTypes.func.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.shape()),
};

const mapDispatch = {
  getTasksList: tasksActions.getTasksList,
  updateTask: tasksActions.updateOneTask,
  deleteTask: tasksActions.deleteOneTask,
  createTask: tasksActions.createOneTask,
};

const mapState = state => ({
  tasks: sortedTaskListSelector(state),
});

export default connect(mapState, mapDispatch)(TasksList);
