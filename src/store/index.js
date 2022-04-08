import {combineReducers, configureStore} from "@reduxjs/toolkit";
import todoSlice from "./todo-slice";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";

const reducers = combineReducers({
  todo: todoSlice.reducer,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);
const store = configureStore({
  reducer: persistedReducer,
});
console.log(store);

const persistor = persistStore(store);
export {store, persistor};
