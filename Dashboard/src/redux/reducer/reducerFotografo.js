import { createSlice } from "@reduxjs/toolkit";

// SE INICIA OBJETO DEL REDUCER
const initialState = {
  misEventos: [],
  imagenesDelEvento: [],
  videos: [],
  multimedia: [],
};

//ACA SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const reducerFotografo = createSlice({
  name: "reducerFotografo",
  initialState,
  reducers: {
    inscripcionAlEvento(state, action) {
      const isEventList = Array.isArray(action.payload);
    
      if (isEventList) {
        // Si action.payload es una lista, actualizar el estado con la nueva lista
        return {
          ...state,
          misEventos: action.payload,
        };
      } else {
        // Si action.payload es un objeto, verificar si el evento ya existe y agregarlo si no
        const eventExists = state.misEventos.some(
          (event) => event.id === action.payload.id
        );
    
        if (!eventExists) {
          return {
            ...state,
            misEventos: [...state.misEventos, action.payload],
          };
        }
        
        // Si el evento ya existe, devolver el estado sin cambios
        return state;
      }
    },

    setMultimediaDelEvento(state, action) {
      return {
        ...state,
        multimedia: action.payload, 
      };
    },
    

    setImagenesDelEvento(state, action) {
      console.log('fotos en reducer', action.payload)
      return {
        ...state,
        imagenesDelEvento: action.payload.fotos,
      };
    },

    setVideosDelEvento(state, action) {
      return {
        ...state,
        videos: action.payload.videos,
      };
    },
  },
});

export const { inscripcionAlEvento, setImagenesDelEvento, setVideosDelEvento, setMultimediaDelEvento } = reducerFotografo.actions;
export default reducerFotografo.reducer;
