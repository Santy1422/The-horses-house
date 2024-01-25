import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  eventAll: [],
  allEventSet: false,
  other: [],
  myEvents: [],
  eventID: [],
  borradores: [],
  publicados: [],
  filterEventosPasados: [],
  filterEventosFuturos: [],
  filterEventosEnCurso: [],
  inscriptosPorPrueba: [],
};

const reducerEventAll = createSlice({
  name: "reducerEventAll",
  initialState,
  reducers: {
    eventAllSetEvents(state, action) {
      console.log(action.payload);
      return {
        ...state,
        eventAll: action.payload,
        allEventSet: true,
      };
    },
    setMyEventNormalDashboard(state, action) {
      console.log(action.payload);
      return {
        ...state,
        myEvents: action.payload,
      };
    },
    setEventId(state, action) {
      return {
        ...state,
        eventID: action.payload,
      };
    },

    setOther(state, action) {
      return {
        ...state,
        other: action.payload,
      };
    },

    setMyEvents(state, action) {
      const isEventList = Array.isArray(action.payload);

      if (isEventList) {
        return {
          ...state,
          myEvents: action.payload,
        };
      } else {
        const eventExists = state.myEvents.some(
          (event) => event.id === action.payload.id
        );
        if (!eventExists) {
          return {
            ...state,
            myEvents: [...state.myEvents, action.payload],
          };
        }
        return state;
      }
    },
    setBorradores(state, action) {
      return {
        ...state,
        borradores: action.payload,
      };
    },
    setPublicados(state, action) {
      return {
        ...state,
        publicados: action.payload,
      };
    },
    setEventsWithoutDeleted(state, action) {
      const newState = state.eventAll.filter(
        (event) => event.id !== action.payload.evento.id
      );
      const newmyEvents = state.myEvent.filter(
        (event) => event.id !== action.payload.evento.id
      );

      return {
        ...state,
        myEvent: newmyEvents,
        eventAll: newState,
      };
    },
    setFiltroEventosPasados(state, action) {
      return {
        ...state,
        filterEventosPasados: action.payload,
      };
    },
    setFiltroEventosFuturos(state, action) {
      return {
        ...state,
        filterEventosFuturos: action.payload,
      };
    },
    setFiltroEventosEnCurso(state, action) {
      return {
        ...state,
        filterEventosEnCurso: action.payload,
      };
    },

    setInscriptosPorPrueba(state, action) {
      return {
        ...state,
        inscriptosPorPrueba: action.payload,
      };
    },
  },
});

export const {
  eventAllSetEvents,
  setOther,
  setBorradores,
  setPublicados,
  setMyEvents,
  setEventsWithoutDeleted,
  setFiltroEventosEnCurso,
  setFiltroEventosFuturos,
  setFiltroEventosPasados,
  setEventId,
  setInscriptosPorPrueba,
  setMyEventNormalDashboard
} = reducerEventAll.actions;
export default reducerEventAll.reducer;
