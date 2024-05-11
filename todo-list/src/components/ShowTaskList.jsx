import React, { Component } from 'react';

class ShowTaskList extends Component {
  render() {
    const { task, handleUpdate, handleDelete } = this.props;

    return (
      <div key={task.id}>
        <input 
          type="text"
          value={task.title} 
          onChange={(e) => {handleUpdate(e.target.value, task.id)}}
        />

        <button onClick={() => handleDelete(task.id)}>Delete Item</button>
      </div>
    );
  }
}

export default ShowTaskList;