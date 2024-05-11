import React, { Component } from 'react';

class InputTask extends Component {
  render() {
    const { task, handleInput, handleAdd } = this.props;

    return (
      <div>
        <input 
          type="text" 
          placeholder='Type here'
          value={task} 
          onChange={(e) => {handleInput(e.target.value)}} 
        />
        <button onClick={handleAdd}>Add Item</button>
      </div>
    );
  }
}

export default InputTask;