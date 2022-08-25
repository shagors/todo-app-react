import React from 'react';
import Todo from './Todo';
import style from './todos.module.css';

const Todos = ({ todos, onRemoveTodo }) => {
  return (
    <section className={style.todos}>
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo.todo} id={todo.id} onRemoveTodo={onRemoveTodo}></Todo>
      ))}
    </section>
  );
};

export default Todos;