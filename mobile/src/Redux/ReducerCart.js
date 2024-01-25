import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    inscripcionEvento: [],

    federarCaballo: [],
    federrarJinete: [],
    federarClub: [],
    federarEntrenador: [],
    federarBinomio: [],
    receptorCredencial: [],
    suscribirse: [],
}

const ReducerCart = createSlice({
    name: 'ReducerCart',
    initialState,
    reducers: {
        setEvento(state, action) {
            return {
               ...state,
               inscripcionEvento: action.payload,
            };
         },
         setPrueba1(state, action) {
            return {
               ...state,
               inscripcionPrueba1: action.payload,
            };
         },
         setearReceptorCredencial(state, action) {
            return {
               ...state,
               receptorCredencial: action.payload,
            };
         },
         setPrueba2(state, action) {
            return {
               ...state,
               inscripcionPrueba2: action.payload,
            };
         },
         setPrueba3(state, action) {
            return {
               ...state,
               inscripcionPrueba3: action.payload,
            };
         },
        setearCaballo(state, action) {
            return {
                ...state,
                federarCaballo: action.payload
            }
        },
        setearBinomio(state, action) {
            return {
                ...state,
                federarBinomio: action.payload
            }
        }, 
        setearJinete(state, action) {
            return {
                ...state,
                federrarJinete: action.payload
            }
        }, 
        setearClub(state, action) {
            return {
                ...state,
                federarClub: action.payload
            }
        }, 
        setearEntrenador(state, action) {
            return {
                ...state,
                federarEntrenador: action.payload
            }
        }, 
        setSuscribirse(state, action) {
            return {
                ...state,
                suscribirse: action.payload
            }
        }, 
        completePayment(state, action) {
            return {
                ...state,
                suscribirse: [],
                federarEntrenador: [],
                federarClub:[],
                federrarJinete:[],
                federarCaballo:[],
                inscripcionEvento: []

            }
        },         
    }
})

export const {setEvento, setearCaballo, setearJinete, setearClub, setearEntrenador, setearBinomio,setearReceptorCredencial ,setSuscribirse, completePayment, setPrueba1, setPrueba2, setPrueba3} = ReducerCart.actions
export default ReducerCart.reducer;