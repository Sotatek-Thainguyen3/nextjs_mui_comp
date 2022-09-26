import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
    list: [] as string[],
    count: 0
}

const todoReducer = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        _addTodo: (state, actions: PayloadAction<string>) => {
            state.list.unshift(actions?.payload);
        }
    }
})

const {reducer, actions} = todoReducer;

export const {_addTodo} = actions;
export default reducer;
