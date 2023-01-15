import React from 'react';
import {Link, useParams} from "react-router-dom";
import './ArticlePage.scss'
import {useGetDetailArticleQuery} from "../../store/articles/articles.api";
import SkeletonsArticlePage from '../../components/Skeletons/SkeletonsArticlePage';

const ArticlePage = () => {
  const {id} = useParams();
  const {isLoading, data} = useGetDetailArticleQuery(String(id));

  return (
    <main className='articlePage'>
      {isLoading
        ? <SkeletonsArticlePage/>
        : <>
          <div className='articlePage__image'>
            <img src={data?.imageUrl} alt='Article theme'/>
          </div>

          <div className='articlePage__content'>
            <h1 className='articlePage__title'>{data?.title}</h1>

            <p className='articlePage__summary'>
              {data?.summary}
            </p>
          </div>
          <Link className='articlePage__link' to='/'>Back to homepage</Link>
        </>
      }
    </main>
  );
};

export default ArticlePage;