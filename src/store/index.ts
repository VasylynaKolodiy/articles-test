import {configureStore} from "@reduxjs/toolkit";
import {articlesApi} from "./articles/articles.api";

export const store = configureStore({
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(articlesApi.middleware)
})