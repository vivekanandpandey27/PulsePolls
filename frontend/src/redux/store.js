import { configureStore, combineReducers } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import pollReducer from "./PollSlice"

import storage from "redux-persist/lib/storage"; 
import { persistReducer, persistStore } from "redux-persist";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

// Persist config
const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

// Combine reducers properly
const rootReducer = combineReducers({
  user: userReducer,
  poll: pollReducer,
});

// Apply persistence to rootReducer
const persistedReducer = persistReducer(persistConfig, rootReducer);

// Configure store
const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

// Export store and persistor
export const persistor = persistStore(store);
export default store;
