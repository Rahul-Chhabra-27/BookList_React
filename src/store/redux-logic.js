import { configureStore } from '@reduxjs/toolkit';
import  books  from './Books-slice';
import uiSlice from './UI-slice';

const store = configureStore({
    reducer:{
        books:books.reducer,
        ui:uiSlice.reducer,
    }
})
export default store;