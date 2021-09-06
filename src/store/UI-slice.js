import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
    name:'UI',
    initialState:{ isFormVisible : false, style:{text:'OPEN',color:'green'}},
    reducers:{
        toggleShowHandler(state) {
            state.isFormVisible = !state.isFormVisible;
            state.style.color = state.style.color === 'red'?'green':'red';
            state.style.text = state.style.text === 'CLOSE'?'OPEN':'CLOSE';
        }
    }
})

export const uiAction = uiSlice.actions;
export default uiSlice;