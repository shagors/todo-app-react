import React from 'react'
import Todo from './Todo'

const Todos = ({todos}) => {

  return (
    <section>
        {
            todos.map((todo) => <Todo key={todo.id} todo={todo}></Todo>)
        }
    </section>
  )
}

export default Todos