import React, { Component } from 'react';
import './App.css';
import InputTask from './components/InputTask';
import ShowTaskList from './components/ShowTaskList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      task: "",
      taskList: []
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleAdd() {
    this.setState(prevState => ({
      taskList: [
        ...prevState.taskList,
        {
          id: prevState.taskList.length + 1,
          title: prevState.task
        }
      ],
      task: ""
    }));
  }

  handleInput(task) {
    this.setState({ task: task });
  }

  handleUpdate(todo, id) {
    this.setState(prevState => ({
      taskList: prevState.taskList.map(task => {
        if (task.id === id) {
          return {
            ...task,
            title: todo
          };
        }
        return task;
      })
    }));
  }

  handleDelete(id) {
    this.setState(prevState => ({
      taskList: prevState.taskList.filter(taskItem => taskItem.id !== id)
    }));
  }

  render() {
    const { task, taskList } = this.state;

    return (
      <div>
        <div>
          <InputTask task={task} handleAdd={this.handleAdd} handleInput={this.handleInput} />
          <p>{task}</p>
          {taskList.map(task => (
            <ShowTaskList key={task.id} task={task} handleDelete={this.handleDelete} handleUpdate={this.handleUpdate} />
          ))}
        </div>
      </div>
    );
  }
}

export default App;