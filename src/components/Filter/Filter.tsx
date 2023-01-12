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
  const debounced = useDebounce(search, 300)

  useEffect(() => {
    console.log(debounceArr[0], 'debounceArr')
  }, [debounced])

  const debounceArr = debounced.split(' ')


  //const aa =  articles?.filter((article) => article?.title.toLowerCase().split(' ').includes(debounceArr[0]))

  const aa = articles?.map((article) =>
     ({...article, title: article?.title.replaceAll(debounceArr[0], `<span>${debounceArr[0]}</span>`)})
  )

  const bb = aa.filter((elem) => elem.title.includes('<span') && elem)



  console.log(aa, 'aa')
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

      <p className='filter__results'>Results: {aa?.length}</p>

      <ArticleList articlesState={ debounceArr.length>0 ? bb : articles} />
    </section>
  );
};

export default Filter;