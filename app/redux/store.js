import { configureStore } from "@reduxjs/toolkit";
import { authApi } from "./services/auth/index.";
import { storeApi } from "./services/store";
import { productApi } from "./services/product";

export const store = configureStore({
  reducer: {
    //   login: loginReducer,
    [authApi.reducerPath]: authApi.reducer,
    [storeApi.reducerPath]: storeApi.reducer,
    [productApi.reducerPath]: storeApi.reducer,
    // },
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      authApi.middleware,
      storeApi.middleware,
      productApi.middleware
    ),
});

// export const getRootState = () => store.getState();
// export const appDispatch = (action) => store.dispatch(action);
