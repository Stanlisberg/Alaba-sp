import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth/index.";

export const store = configureStore({
  reducer: {
    //   login: loginReducer,
    [authApi.reducerPath]: authApi.reducer,
    // },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(authApi.middleware),
});

// export const getRootState = () => store.getState();
// export const appDispatch = (action) => store.dispatch(action);
