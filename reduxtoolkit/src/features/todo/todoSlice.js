import { createSlice, nanoid } from "@reduxjs/toolkit";

// nanoid - generates unqiue id

// object or Array
const initialState = { 
    todos: [{id: 1, text: "hello world"}]
}

export const todoSlice = createSlice({
    name: 'Todo',
    initialState,
    reducers: {
        addTodo: (state, action) => { // always access to these both
            const todo = {
                id: nanoid(),  // unique Id's
                text: action.payload, // payload is also object.
            }
            state.todos.push(todo)
        },
        // state - current state jo bhi hai, action - jjo bhi data pass hora.
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        }
    }
})

export const { addTodo, removeTodo } = todoSlice.actions
export default todoReducer = todoSlice.reducer