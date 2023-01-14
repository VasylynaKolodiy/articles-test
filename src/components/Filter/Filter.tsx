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
  {articles,
    filteredArticlesLength,
    setFilteredArticles,
    setPageNumber}) => {

  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)
  let debounceArr = debounced.split(' ').map((elem) => elem.toLowerCase())

  useEffect(() => {
    debounced
      ? setFilteredArticles(filterArticles()?.filter((article) => article.title.includes('span'))
      .sort((a, b) => b['priority'] - a['priority']))
      : setFilteredArticles(articles)
    setPageNumber(1)
  }, [debounced, articles])

  const filterArticles = () => {
    return articles?.map((article) => {
      let priority = 0;
      let resTitle = article.title.split(' ')?.map((word) => {
        let priorityNumber = debounceArr.includes(word.toLowerCase()) ? (priority = priority + 2) : priority;
        return debounceArr.includes(word.toLowerCase()) ? `<span>${word}</span>` : word;
      })
      let resSummary = article.summary.split(' ')?.map((word) => {
        let priorityNumber = debounceArr.includes(word.toLowerCase()) ? (priority = priority + 1) : priority;
        return debounceArr.includes(word.toLowerCase()) ? `<span>${word}</span>` : word;
      })
      return ({...article, title: resTitle.join(' '), summary: resSummary.join(' '), priority: priority})
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
        placeholder='search...'
        value={search}
        onChange={(e) => onChangeSearch(e)}
      />

      {debounced && <p className='filter__results'>Results: {filteredArticlesLength}</p>}

    </section>
  );
};

export default Filter;
