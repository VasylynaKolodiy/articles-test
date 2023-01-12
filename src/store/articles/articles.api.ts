import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {IArticle} from "../../models/IArticle";

export const articlesApi = createApi({
  reducerPath: 'articles/Api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://api.spaceflightnewsapi.net/v3',
  }),

  endpoints: build => ({
    getArticles: build.query({
      query: () => ({
        url: '/articles?_limit=100',
      })
    }),
    getDetailArticle: build.query<IArticle, string>({
      query: (id: string) => ({
        url: `/articles/${id}`,
      })
    })
  })
})

export const {useGetArticlesQuery, useGetDetailArticleQuery} = articlesApi