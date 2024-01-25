import { createSlice } from '@reduxjs/toolkit';

//SE INICIA OBJETO DEL REDUCER
const initialState = {
   user: null,
   clientHorse: null,
};


const ReducerUser = createSlice({
    name: 'ReducerUser',
    initialState,
    reducers: {
        
    }
})