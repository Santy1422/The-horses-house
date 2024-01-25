import { createSlice } from "@reduxjs/toolkit";

//SE INICIA OBJETO DEL REDUCER
const initialState = {
  servicios: [
    {
      veterinario: [],
    },
    {
      herrero: [],
    },
    {
      caballerizo: [],
    },
    {
      transporte: [],
    },
    {
      profesores: [],
    },
    {
      pasaporte: [],
    },
    {
      proveedores: [],
    },
  ],
};

//ACÁ SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const ReducerMisServicios = createSlice({
  name: "ReducerMisServicios",
  initialState,
  reducers: {
    setServices(state, action) {
      // console.log("action en reducer", action.payload);
      if (action.payload.servicio === "veterinaria") {
        const newService = {
          servicio: action.payload.nombreservicio,
          tiposervicio: action.payload.servicio,
          fecha: action.payload.fecha,
          hora: action.payload.hora,
          profesional: action.payload.profesional,
          status: action.payload.status,
          horseId: action.payload.caballoId,
        };
        const veterinario = [...state.servicios[0].veterinario, newService];
        console.log("new service en red", veterinario);
        return {
          ...state,
          servicios: [
            { ...state.servicios[0], veterinario },
            ...state.servicios.slice(1),
          ],
          // [state.servicios[0].veterinario]: veterinario,
        };
      }
      // console.log('state', state)

      // HERRERO
      if (action.payload.servicio === "herrero") {
        const newService = {
          servicio: action.payload.nombreservicio,
          tiposervicio: action.payload.servicio,
          fecha: action.payload.fecha,
          hora: action.payload.hora,
          profesional: action.payload.profesional,
          status: action.payload.status,
          horseId: action.payload.caballoId,
        };
        const herrero = [...state.servicios[1].herrero, newService];
        console.log('herrero en reducer', herrero)
        console.log('state serv 1', state.servicios[1])
        console.log('slice', state.servicios.slice(2))
        return {
          ...state,
          servicios: [
            ...state.servicios.slice(0,1),
            { ...state.servicios[1], herrero },
            ...state.servicios.slice(2),
          ],
        };
      }

      // CABALLERIZO
      if (action.payload.servicio === "caballerizo") {
        const newService = {
          servicio: action.payload.nombreservicio,
          tiposervicio: action.payload.servicio,
          fecha: action.payload.fecha,
          hora: action.payload.hora,
          profesional: action.payload.profesional,
          status: action.payload.status,
          horseId: action.payload.caballoId,
        };
        const caballerizo = [...state.servicios[2].caballerizo, newService];
        return {
          ...state,
          servicios: [
            ...state.servicios.slice(0,2),
            { ...state.servicios[2], caballerizo },
            ...state.servicios.slice(3),
          ],
        };
      }

      // TRANSPORTE
      if (action.payload.servicio === "transporte") {
        const newService = {
          servicio: action.payload.nombreservicio,
          tiposervicio: action.payload.servicio,
          fecha: action.payload.fecha,
          hora: action.payload.hora,
          profesional: action.payload.profesional,
          status: action.payload.status,
          horseId: action.payload.caballoId,
        };
        const transporte = [...state.servicios[3].transporte, newService];
        return {
          ...state,
          servicios: [
            ...state.servicios.slice(0,3),
            { ...state.servicios[3], transporte },
            ...state.servicios.slice(4),
          ],
        };
      }

      // PROFESORES
      if (action.payload.servicio === "profesor") {
        const newService = {
          servicio: action.payload.nombreservicio,
          tiposervicio: action.payload.servicio,
          fecha: action.payload.fecha,
          hora: action.payload.hora,
          profesional: action.payload.profesional,
          status: action.payload.status,
          horseId: action.payload.caballoId,
        };
        const profesores = [...state.servicios[4].profesores, newService];
        return {
          ...state,
          servicios: [
            ...state.servicios.slice(0,4),
            { ...state.servicios[4], profesores },
            ...state.servicios.slice(5),
          ],
        };
      }

      // PASAPORTE
      if (action.payload.servicio === "pasaporte") {
        const newService = {
          servicio: action.payload.nombreservicio,
          tiposervicio: action.payload.servicio,
          fecha: action.payload.fecha,
          hora: action.payload.hora,
          profesional: action.payload.profesional,
          status: action.payload.status,
          horseId: action.payload.caballoId,
        };
        const pasaporte = [...state.servicios[5].pasaporte, newService];
        return {
          ...state,
          servicios: [
            ...state.servicios.slice(0,5),
            { ...state.servicios[5], pasaporte },
            ...state.servicios.slice(6),
          ],
        };
      }

      // PROVEEDORES
      if (action.payload.servicio === "proveedores") {
        const newService = {
          servicio: action.payload.nombreservicio,
          tiposervicio: action.payload.servicio,
          fecha: action.payload.fecha,
          hora: action.payload.hora,
          profesional: action.payload.profesional,
          status: action.payload.status,
          horseId: action.payload.caballoId,
        };
        const proveedores = [...state.servicios[6].proveedores, newService];
        return {
          ...state,
          servicios: [
            ...state.servicios.slice(0,6),
            { ...state.servicios[6], proveedores },
            ...state.servicios.slice(7),
          ],
        };
      }
    },
  },
});

export const { setServices } = ReducerMisServicios.actions;

export default ReducerMisServicios.reducer;
