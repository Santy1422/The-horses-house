import { createSlice } from "@reduxjs/toolkit";

//SE INICIA OBJETO DEL REDUCER
const initialState = {
  myHorse: null,
  clientHorse: null,
};

//ACÁ SE CREA EL REDUCER JUNTO CON LAS ACTIONS
const ReducerHorse = createSlice({
  name: "ReducerHorse",
  initialState,
  reducers: {
    setMyHorse(state, action) {
      // console.log('reducer', action.payload)
      return {
        ...state,
        myHorse: action.payload,
      };
    },

    setMyHorseServices(state, action) {
      const { id, servicio } = action.payload;
      // console.log('payload en red', action.payload)

      //encontrar el caballo
      const horseIndex = state.myHorse.findIndex((horse) => horse._id === id);
      const horse = state.myHorse[horseIndex];

      //clono los servicios y actualizo el estado
      const updateHorseServices = { ...horse.horseServicios };
      updateHorseServices[servicio] = true;
      // console.log('elservicio', updateHorseServices[servicio])
      const updatedHorse = { ...horse, horseServicios: updateHorseServices };

      //actulizo el estado MyHorse
      const updatedMyHorse = [...state.myHorse];
      updatedMyHorse[horseIndex] = updatedHorse;

      // console.log("upd", updatedMyHorse);

      return {
        ...state,
        myHorse: updatedMyHorse,
      };
    },
  },
});

export const { setMyHorse, setMyHorseServices } = ReducerHorse.actions;

export default ReducerHorse.reducer;
