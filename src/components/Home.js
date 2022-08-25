import React from 'react';
import Todos from './Todos';
import style from './home.module.css';
import NewTodo from './NewTodo';

const dummyTodos = [
    {
        id: 1,
        title: "todo title 1",
        desc: "todo1 descp is here",
    },
    {
        id: 2,
        title: "todo title 2",
        desc: "todo2 descp is here",
    },
];

const Home = () => {
  return (
    <div className={style.container}>
        <h1 style={{color: "white"}}>Todo App</h1>
        <NewTodo></NewTodo>
        <Todos todos={dummyTodos}></Todos>
    </div>
  )
}

export default Home