import {configureStore} from "@reduxjs/toolkit";
import infoReducer from './info/reducer'
import todoReducer from './todo/reducer'

export default configureStore({
    reducer: {
        info: infoReducer,
        todo: todoReducer
    },
    devTools: true,
});
