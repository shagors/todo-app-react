import React from 'react';
import Todo from './Todo';
import style from './todos.module.css';

const Todos = ({todos}) => {

  return (
    <section className={style.todos}>
        {
            todos.map((todo) => <Todo key={todo.id} todo={todo.todo} id={todo.id}></Todo>)
        }
    </section>
  )
}

export default Todos