import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    eventAll: [],
    allEventSet: false,
    other: [],
    myEvent: [],
    eventID:[],
    borradores: [],
    publicados: [],
    filterEventosPasados: [],
    filterEventosFuturos: [],
    filterEventosEnCurso: []
}

const reducerEventAll = createSlice({
    name: 'reducerEventAll',
    initialState,
    reducers: {
        eventAllSetEvents(state, action) {
            console.log(action.payload)
            return {
                ...state,
                eventAll: action.payload,
                allEventSet: true,
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
        setMyEvent(state, action) {
            return {
                ...state,
                myEvent: action.payload,
            };
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
        setEventsWithoutDeleted(state, action){
            
            const newState= state.eventAll.filter(event => event.id !== action.payload.evento.id)
            const newmyEvents = state.myEvent.filter(event => event.id !== action.payload.evento.id)

            return {
                ...state,
                myEvent: newmyEvents,
                eventAll: newState
            }
        },
        setFiltroEventosPasados(state, action) {
            return {
                ...state,
                filterEventosPasados: action.payload
                
            }
        },
        setFiltroEventosFuturos(state, action) {
            return {
                ...state,
                filterEventosFuturos: action.payload
                
            }
        },
        setFiltroEventosEnCurso(state, action) {
            return {
                ...state,
                filterEventosEnCurso: action.payload
            }
        }

    }
})

export const {eventAllSetEvents, setOther, setBorradores, setPublicados, setMyEvent, setEventsWithoutDeleted, setFiltroEventosEnCurso, setFiltroEventosFuturos, setFiltroEventosPasados,setEventId} = reducerEventAll.actions
export default reducerEventAll.reducer;