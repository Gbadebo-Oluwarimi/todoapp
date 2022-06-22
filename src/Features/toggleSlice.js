import { createSlice } from'@reduxjs/toolkit'


const initialState = {
    id:0,
    toggle:false
}
const toggleSlice = createSlice({
    name:'toggle',
    initialState,
    reducers:{
        updatetoggle:(state) => {
            state.toggle = !state.toggle
        },
        getid:(state, action) => {
            state.id=action.payload
        }
    }
})

export const { updatetoggle, getid } = toggleSlice.actions
export default toggleSlice.reducer