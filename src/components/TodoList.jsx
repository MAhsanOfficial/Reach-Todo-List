import React from 'react';

const TodoList = ({ todos, toggleTodo, deleteTodo, filter, setFilter, clearDoneTodos, clearAllTodos }) => {
  const filteredTodos = todos.filter(todo => {
    if (filter === 'all') return true;
    if (filter === 'done') return todo.done;
    if (filter === 'todo') return !todo.done;
    return true;
  });

  return (
    <div className="todo-list">
      <div className="filter-buttons">
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('done')}>Done</button>
        <button onClick={() => setFilter('todo')}>Todo</button>
      </div>
      <ul>
        {filteredTodos.map((todo, index) => (
          <li key={index} className={todo.done ? 'done' : ''}>
            <span onClick={() => toggleTodo(index)}>
              {todo.done ? <s>{todo.text}</s> : todo.text}
            </span>
            <button onClick={() => toggleTodo(index)}>
              {todo.done ? 'Undo' : 'Done'}
            </button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button className='btn1' onClick={clearDoneTodos}>Delete done tasks</button>
      <button className='btn2' onClick={clearAllTodos}>Delete all tasks</button>
    </div>
  );
};

export default TodoList;
