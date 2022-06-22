import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    todos:[
        {
            id:1,
            title:'Home alone',
            completed:false
        }
    ],
}

const todoSlice = createSlice({
    name:'todo',
    initialState,
    reducers:{
        createtodo:(state, action) => {
            state.todos.push(action.payload)
        },
        deleteTodo: (state, action) => {
            const { id } = action.payload
            const usertodelete = state.todos.find(todo => todo.id === id)
            console.log(usertodelete)
            if(usertodelete){
                state.todos.splice(state.todos.findIndex((todo) => todo.id === id), 1);
            }
          },
        updateTodo:(state, action) => {
            const {id, title} = action.payload
            const updateuser = state.todos.find(todo => todo.id === id)
            if(updateuser){
                updateuser.title = title
            }
        },
        updateStatus:(state, action) => {
            const { id } = action.payload
            const Status = state.todos.find(todo => todo.id === id)
            if(Status){
                Status.completed = !Status.completed
            }
        }
    }
})

export const { updateTodo, updateStatus,createtodo, deleteTodo } = todoSlice.actions
export default todoSlice.reducer