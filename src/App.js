import { v4 as uuidv4 } from 'uuid';
import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { createtodo, deleteTodo, updateStatus} from './Features/todoSlice'
import { getid, updatetoggle } from './Features/toggleSlice';
import UpdateToggle from './UpdateToggle';
function App() {
  const [todo, settodo] = useState("")
  const dispatch = useDispatch()
  const listoftodos = useSelector(state => state.todo.todos)
  const toggle = useSelector(state => state.toggle.toggle)
  function HandleSubmit(){
    if(todo !== ""){
    dispatch(createtodo({
      id:uuidv4(),
      title:todo,
      completed:false
    }))
    settodo("")
  }
  else{alert('all the fields must be field')}
  }
  function HandleCompleted(id){
    dispatch(updateStatus({id}))
  }
  function HandleDelete(id){
    dispatch(deleteTodo({id}))
  }
  function HandleUpdate(id){
    dispatch(updatetoggle())
    dispatch(getid(id))

  }
  return (
    <>
    { toggle ? <UpdateToggle/> : null }
    <div className="App">
     <input 
      type="text"
      onChange={(e) => settodo(e.target.value)}
      value={todo}
     />
     <button onClick={() => HandleSubmit()}>Add A Todo</button><br></br>
     List of Todo's - {
        listoftodos.map((todo) => (
          <div key={todo.id}>
            <li>{todo.title} - {todo.completed ? (<div>Completed</div>): (<div>not completed</div>)}</li>
            <button onClick={() => HandleUpdate(todo.id)}>Update</button>
            <button onClick={() => HandleCompleted(todo.id)}>completed</button>
            <button onClick={() => HandleDelete(todo.id)}>Delete</button>
          </div>
        ))
     }
    </div>
    </>
  );
}

export default App;
