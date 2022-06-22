import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { updatetoggle } from './Features/toggleSlice';
import { updateTodo } from './Features/todoSlice';
const UpdateToggle = () => {
  const users = useSelector(state => state.todo.todos)
  const id = useSelector(state => state.toggle.id);
 const updateuser =  users.find(user => user.id === id)
  const dispatch = useDispatch()
  const [title, settitle] = useState(updateuser.title)

  function handleupdate(id){
    dispatch(updateTodo({id, title}))
    dispatch(updatetoggle())
  }
  return (
    <div className='toggle'>
        <div className='content'>
            <div className='content2'>
                <div className='content3'> UpdateTodo
                <div><button onClick={() => dispatch(updatetoggle())}>x</button></div></div>
            <input value={title} onChange={(e) => settitle(e.target.value)}></input>
            <button onClick={() => handleupdate(id)}>Update</button>
            </div>
        </div>
    </div>
  )
}

export default UpdateToggle