import React from 'react';
import {useGetArticlesQuery} from '../../store/articles/articles.api'
import Filter from "../../components/Filter/Filter";

const HomePage = () => {
  const {isLoading, isError, data} = useGetArticlesQuery(null);

  return (
    <main className='homePage'>
      <Filter articles={data}/>
    </main>
  );
};

export default HomePage;