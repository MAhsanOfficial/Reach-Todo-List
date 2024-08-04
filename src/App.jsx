import React, { useState } from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState('all');

  const addTodo = (text) => {
    setTodos([...todos, { text, done: false }]);
  };

  const toggleTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const clearDoneTodos = () => {
    setTodos(todos.filter(todo => !todo.done));
  };

  const clearAllTodos = () => {
    setTodos([]);
  };

  return (
    <div className="app">
      <h1 className='head1'>TodoInput</h1>
      <TodoInput addTodo={addTodo} />
      <h1 className='head1'>TodoList</h1>
      <TodoList
        todos={todos}
        toggleTodo={toggleTodo}
        deleteTodo={deleteTodo}
        filter={filter}
        setFilter={setFilter}
        clearDoneTodos={clearDoneTodos}
        clearAllTodos={clearAllTodos}
      />
    </div>
  );
};

export default App;