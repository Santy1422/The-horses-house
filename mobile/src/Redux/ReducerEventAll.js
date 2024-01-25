import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    eventAll: undefined,
    eventId: false,
    allEventSet: false,
    eventIdSet: false,
    enCurso: undefined,
    pasados: undefined,
    proximos: undefined,
    concurso: undefined,
    pasada: undefined,
    miseventos: undefined
}

const ReducerEventAll = createSlice({
    name: 'ReducerEventAll',
    initialState,
    reducers: {
        eventAllSetEvents(state, action) {
            return {
               ...state,
               eventAll: action.payload,
               allEventSet: true,
            };
         },
        eventAllSetEventId(state, action) {
            return {
                ...state,
                eventId: action.payload,
                eventIdSet: true,
            }
        },
        setEventsPasados(state, action) {
            return {
                ...state,
                pasados: action.payload
            }
        },
        setEventsEnCurso(state, action) {
            return {
                ...state,
                enCurso: action.payload

            }
        },
        setEventsFuturos(state, action) {
            return {
                ...state,
                proximos: action.payload

            }
        },
        setConcursos(state, action) {
            return {
                ...state,
                concurso: action.payload

            }
        },
    
        setPasadas(state, action) {
            return {
                ...state,
                pasada: action.payload

            }
        },
        setMisEventos(state, action) {
            return {
                ...state,
                misEventos: action.payload

            }
        },
    }
})

export const {eventAllSetEvents, eventAllSetEventId, setEventsPasados,setEventsEnCurso, setEventsFuturos, setConcursos, setPasadas, setMisEventos } = ReducerEventAll.actions
export default ReducerEventAll.reducer;