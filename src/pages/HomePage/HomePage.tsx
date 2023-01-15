import React, {useState} from 'react';
import Pagination from "@mui/material/Pagination";
import {useGetArticlesQuery} from '../../store/articles/articles.api'
import Filter from "../../components/Filter/Filter";
import ArticleList from "../../components/ArticleList/ArticleList";
import {IArticle} from "../../models/IArticle";
import './HomePage.scss'
import SkeletonsHomePage from "../../components/Skeletons/SkeletonsHomePage";
import {LIMIT} from "../../constants";

const HomePage = () => {
  const {isFetching, data: articles = []} = useGetArticlesQuery(null, {refetchOnMountOrArgChange: true});
  const [filteredArticles, setFilteredArticles] = useState<IArticle[]>(articles);

  let [pageNumber, setPageNumber] = useState<number>(1);
  const TOTAL_COUNT = filteredArticles.length;
  let countOfPages = TOTAL_COUNT && Math.ceil(TOTAL_COUNT / LIMIT);

  return (
    <main className='homePage'>
      <Filter
        articles={articles}
        filteredArticlesLength={filteredArticles.length}
        setFilteredArticles={setFilteredArticles}
        setPageNumber={setPageNumber}
      />

      {isFetching
        ? <SkeletonsHomePage/>
        : <>
          <ArticleList articlesState={filteredArticles?.slice(pageNumber * LIMIT - LIMIT, pageNumber * LIMIT)}/>

          {countOfPages > 1 &&
          (<Pagination
              className='pagination'
              count={countOfPages}
              size="large"
              page={pageNumber}
              onChange={(event, value) => setPageNumber(value)}
            />
          )}
        </>
      }
    </main>
  );
};

export default HomePage;