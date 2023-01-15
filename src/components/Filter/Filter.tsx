import React, {useEffect, useState} from 'react';
import './Filter.scss'
import {IArticle} from "../../models/IArticle";
import {useDebounce} from "../../hooks/debounce";

interface IFilter {
  articles: IArticle[],
  filteredArticlesLength: number,
  setFilteredArticles: (articles: IArticle[]) => void,
  setPageNumber: (pageNumber: number) => void,
}

const Filter: React.FC<IFilter> = (
  {
    articles,
    filteredArticlesLength,
    setFilteredArticles,
    setPageNumber,
  }) => {

  const [search, setSearch] = useState<string>('')
  const debounced = useDebounce(search)
  let debounceArr = debounced.split(' ').map((elem) => elem.toLowerCase())

  useEffect(() => {
    debounced
      ? setFilteredArticles(filterArticles()?.filter((article) => article.priority)
        .sort((a, b) => b.priority - a.priority))
      : setFilteredArticles(articles)
    setPageNumber(1)
  }, [debounced, articles])

  const filterArticles = () => {
    return articles?.map((article) => {
      let priority = 0;

      const resTitle = article.title.split(' ')?.map((word) => {
        if (debounceArr.includes(word.toLowerCase())) priority += 2;
        return debounceArr.includes(word.toLowerCase()) ? `<span>${word}</span>` : word;
      }).join(' ')

      const resSummary = article.summary.split(' ')?.map((word) => {
        if (debounceArr.includes(word.toLowerCase())) priority += 1;
        return debounceArr.includes(word.toLowerCase()) ? `<span>${word}</span>` : word;
      }).join(' ')

      return ({...article, title: resTitle, summary: resSummary, priority: priority})
    })
  }

  const onChangeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  }

  return (
    <section className='filter'>
      <p className='filter__title'>Filter by keywords</p>

      <input
        className='filter__input'
        type='text'
        placeholder='Search...'
        value={search}
        onChange={(e) => onChangeSearch(e)}
      />

      {debounced && <p className='filter__results'>Results: {filteredArticlesLength}</p>}

    </section>
  );
};

export default Filter;
