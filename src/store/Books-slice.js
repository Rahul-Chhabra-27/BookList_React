import { createSlice } from '@reduxjs/toolkit';

const initialState = { books:[]};
const books = createSlice({
    name:'Books',
    initialState:initialState,
    reducers:{
        addBookToList(state,action) {
            state.books.push(action.payload);
        },
        removeBookFromList(state,action) {
            const id = action.payload;
            const filteredBooks = state.books.filter(book => book.id !== id);
            state.books = filteredBooks;
        },
        replaceState(state,action){
            state.books = action.payload;
        }
    }
})
export const bookActions = books.actions;
export default books;