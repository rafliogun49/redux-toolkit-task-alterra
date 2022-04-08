import {createSlice} from "@reduxjs/toolkit";

const initialData = {
  data: [
    {
      id: 1,
      title: "Mengerjakan Exercise",
      completed: true,
    },
    {
      id: 2,
      title: "Mengerjakan Assignment",
      completed: false,
    },
  ],
};

const todoSlice = createSlice({
  name: "todo",
  initialState: initialData,
  reducers: {
    removeTodo: (state, action) => {
      state.data = state.data.filter((todo) => todo.id !== action.payload);
    },
    addTodo: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    changeTodoStatus: (state, action) => {
      let temp = [...state.data];
      temp[action.payload].completed = !temp[action.payload].completed;
      state.data = temp;
    },
  },
});

export const {removeTodo, addTodo, changeTodoStatus} = todoSlice.actions;

export default todoSlice;
