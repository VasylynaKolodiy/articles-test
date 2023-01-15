import React from 'react';
import {IArticle} from '../../models/IArticle';
import ArticleCard from "../ArticleCard/ArticleCard";
import './ArticleList.scss'

interface IArticleList {
  articlesState: IArticle[]
}

const ArticleList: React.FC<IArticleList>  = ({articlesState}) => {
  return (
    <section className='articleList'>
      {articlesState?.map((article: IArticle) =>
        <ArticleCard article={article} key={article.id}/>
      )}
    </section>
  );
};

export default ArticleList;