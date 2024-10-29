import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  todos: [
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn Node" },
  ],
  todo: { title: "Learn Mongo" },
};
const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const newTodos = [
          ...state.todos,
        { ...action.payload, id: new Date().getTime().toString() },
      ];
      state.todos = newTodos;
      state.todo = { title: "" };
      // alert(`added ${newTodos[newTodos.length - 1].id}, action=${JSON.stringify(action)}`);
    },
    deleteTodo: (state, action) => {
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      state.todos = newTodos;
      // alert(`deleted ${JSON.stringify(action)}`);
    },
    updateTodo: (state, action) => {
      const newTodos = state.todos.map((item) =>
        item.id === action.payload.id ? action.payload : item
      );
      state.todos = newTodos;
      state.todo = { title: "" };
      // alert(`updated ${JSON.stringify(action)}`);
    },
    setTodo: (state, action) => {
      state.todo = action.payload;
      // alert(`set active todo to ${JSON.stringify(action)}`);
    },
  },
});
export const { addTodo, deleteTodo, updateTodo, setTodo } = todosSlice.actions;
export default todosSlice.reducer;