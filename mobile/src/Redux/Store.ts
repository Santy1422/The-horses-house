import { configureStore } from "@reduxjs/toolkit";
import ReducerAuth from "./ReducerAuth";
import ReducerProfesion from "./ReducerProfesion";
import ReducerHorse from "./ReducerHorse";
import ReducerEventAll from "./ReducerEventAll";
import ReducerCart from "./ReducerCart";
import ReducerMisServicios from "./ReducerMisServicios";

const store = configureStore({
  reducer: {
    ReducerAuth: ReducerAuth,
    ReducerProfesion: ReducerProfesion,
    ReducerHorse: ReducerHorse,
    ReducerEventAll: ReducerEventAll,
    ReducerCart: ReducerCart,
    ReducerMisServicios: ReducerMisServicios

  },
});

export default store;
