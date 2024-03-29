import { createSlice } from '@reduxjs/toolkit';

// SE INICIA OBJETO DEL REDUCER
const initialState = {
   usuarioAuth: undefined,
   professions: undefined,
   authenticatedAuth: false,
   loadingAuth: false,
   errorAuth: '',
   successAuth: '',
   sideBarStatus: false
};

//ACA SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const reducerAuth = createSlice({
   name: 'reducerAuth',
   initialState,
   reducers: {
    //ACA authSetUser ES TANTO EL TIPO COMO EL REDUCER Y EL ACTION COMO SE VE EN EL METODO QUE SE CONSTRUYE DE IGUAL FORMA SE REPLICAN TANTO REDUCER COMO ACTIONS CON DIFERENTES NOMBRES
      authSetUser(state, action) {
         return {
            ...state,
            usuarioAuth: action.payload,
            authenticatedAuth: true,
         };
      },
      authSetLoading(state, action) {
         return {
            ...state,
            loadingAuth: action.payload,
         };
      },
      authSignOut(state, action) {
         return {
            ...state,
            usuarioAuth: undefined,
            authenticatedAuth: false,
         };
      },
      authSetError(state, action) {
         return {
            ...state,
            errorAuth: action.payload,
         };
      },
      authSetSuccess(state, action) {
         return {
            ...state,
            successAuth: action.payload,
         };
      },
      setProfessional(state, action) {
         return {
            ...state,
            professions: action.payload,
         };
      },
      setSidebarStatus(state, action) {
         return {
            ...state,
            sideBarStatus: action.payload
         }
      }
   },
});

//ACA SE EXPORTAN LAS ACTIONS QUE SE CREAN AUTOMATICAMENTE MAS ARRIVA
export const { authSetUser, authSetError,setProfessional, authSetLoading, authSetSuccess, authSignOut, setSidebarStatus } = reducerAuth.actions;

//ACA SE EXPORTAN O EXPORTA EL REDUCER
export default reducerAuth.reducer;