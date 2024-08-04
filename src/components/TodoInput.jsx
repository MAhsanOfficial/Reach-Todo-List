import React, { useState } from 'react';

const TodoInput = ({ addTodo }) => {
  
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      addTodo(inputValue.trim());
      setInputValue('');
    }
  };

  return (
    <div className="todo-input">
      <input
        type="text"
        placeholder="New Todo"
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTodo}>Add new task</button>
    </div>
  );
};

export default TodoInput;
