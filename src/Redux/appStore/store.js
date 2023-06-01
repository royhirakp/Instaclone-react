import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
// import { getApiSlice } from "../GetDataPApi/GetDataApi";
import { getApiSlice } from "../getDataPApi/getDataApi";

export const store = configureStore({
  reducer: {
    [getApiSlice.reducerPath]: getApiSlice.reducer,
  },
  middleware: (getDefutMedilewere) => {
    return getDefutMedilewere().concat(getApiSlice.middleware);
  },
});
// store.dispatch(getApiSlice.endpoints.getUsers.initiate());

setupListeners(store.dispatch);
