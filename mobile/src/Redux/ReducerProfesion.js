import { createSlice } from '@reduxjs/toolkit';

//SE INICIA OBJETO DEL REDUCER
const initialState = {
   profesiones: null,
   clientes: null,
   servicios: null,
};


//ACÁ SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const ReducerProfesion = createSlice({
   name: 'ReducerProfesion',
   initialState,
   reducers: {
      setProfesiones(state, action) {
         return {
            ...state,
            profesiones: action.payload,
         };
      },
      setClientes(state, action) {
        return {
           ...state,
           clientes: action.payload,
        };
     },
     setServicios(state, action) {
        return {
           ...state,
           servicios: action.payload,
        };
     },
   },
});

export const { setProfesiones, setClientes, setServicios} = ReducerProfesion.actions;

export default ReducerProfesion.reducer;
