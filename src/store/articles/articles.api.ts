import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const articlesApi = createApi({
  reducerPath: 'articles/Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v3',
  }),

  endpoints: build => ({
    getArticles: build.query({
      query: () => ({
        url: '/articles',
      })
    })
  })
})

export const {useGetArticlesQuery} = articlesApi