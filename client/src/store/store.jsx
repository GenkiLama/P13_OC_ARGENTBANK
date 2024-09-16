import { combineReducers } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";

import login from "./slices/authSlices";
import user from "./slices/userSlices";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "user"]
};

const rootReducer = combineReducers({
  login,
  user,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false
    })
});

export const persistor = persistStore(store);