import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducerAuth from "../reducer/reducerAuth";
import reducerEventAll from "../reducer/reducerEventAll";
import reducerFotografo from "../reducer/reducerFotografo";

const rootReducer = combineReducers({
  reducerAuth,
  reducerEventAll,
  reducerFotografo
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
});

const persistor = persistStore(store);

export { store, persistor };
