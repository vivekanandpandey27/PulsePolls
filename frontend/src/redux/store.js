// store.js
import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from "redux-persist";
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";

import userReducer from "./userSlice";
import pollReducer from "./PollSlice";

// Persist config
const persistConfig = {
  key: "root",
  storage,
};

// Root reducer with persist
const rootReducer = combineReducers({
  user: userReducer,
  poll: pollReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Store setup
const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    }}),
});

export const persistor = persistStore(store);
export default store;
