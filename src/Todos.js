import React from 'react'

export default function Todos({ todos, deleteTodo }) {
    const todolist = todos.length ? (
        todos.map(todo => {
            return (
            <div className='text-neutral-700 text-left pl-3 w-[300px] border-b-2 cursor-pointer '>
                <span onClick={ () => {deleteTodo(todo.id)} } key={todo.id}>{todo.content}</span>
            </div>
            )
        })
    ) : (
        <p className=" text-center w-full text-red-700 p-4 rounded-2xl">No tasks yet! Add one below to get started.</p>
    )
  return (
    <div className='bg-white'>
        {todolist}
    </div>
  )
}
