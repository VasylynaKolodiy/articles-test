import React, {useEffect, useState} from 'react';
import './Filter.scss'
import {useDebounce} from "../../hooks/debounce";
import {IArticle} from "../../models/IArticle";
import ArticleList from "../ArticleList/ArticleList";

interface IFilter {
  articles: IArticle[]
}

const Filter: React.FC<IFilter> = ({articles}) => {

  const [search, setSearch] = useState('')
  const debounced = useDebounce(search)

  const [filteredArticles, setFilteredArticles] = useState(articles)

  useEffect(() => {
    console.log(2)
    console.log(debounced, 'debounced')
    setFilteredArticles(filterArticles()?.filter((article) => article.title.includes('span'))
      .sort((a, b) => b['counts'] - a['counts']))
  }, [debounced])

  let debounceArr = debounced.split(' ').map((elem) => elem.toLowerCase())
  console.log(filteredArticles, 'filteredArticles')

  const filterArticles = () => {

    return articles?.map((article) => {
        let counts = 0;
        let resTitle = article.title.split(' ')?.map((word) => {
          let number = debounceArr.includes(word.toLowerCase()) ? (counts = counts + 2) : counts ;
          return debounceArr.includes(word.toLowerCase()) ? `<span>${word}</span>` : word;

        })

      let resSummary = article.summary.split(' ')?.map((word) => {
        let number = debounceArr.includes(word.toLowerCase()) ? (counts = counts + 1) : counts;
        return debounceArr.includes(word.toLowerCase()) ? `<span>${word}</span>` : word;

      })
        return ({...article, title: resTitle.join(' '), summary: resSummary.join(' '), counts: counts})
      }
    )
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

      {debounced && <p className='filter__results'>Results: {filteredArticles?.length}</p>}

      <ArticleList articlesState={debounced ? filteredArticles : articles}/>
    </section>
  );
};

export default Filter;