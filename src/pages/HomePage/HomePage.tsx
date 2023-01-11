import React from 'react';
import {useGetArticlesQuery} from '../../store/articles/articles.api'
import ArticleList from "../../components/ArticleList/ArticleList";

const HomePage = () => {
  const {isLoading, isError, data} = useGetArticlesQuery(null);

  console.log(data, 'data')
  return (
    <main className='homePage'>
      <ArticleList articlesState={data} />
    </main>
  );
};

export default HomePage;