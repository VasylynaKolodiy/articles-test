import React from 'react';
import {Link} from "react-router-dom";
import {IArticle} from "../../models/IArticle";
import './ArticleCard.scss'

interface IArticleCard {
  article: IArticle
}

const ArticleCard: React.FC<IArticleCard> = ({article}) => {
  return (
    <div className='articleCard'>
      <div className='articleCard__image'>
        <img src={article.imageUrl}/>
      </div>

      <div className='articleCard__inner'>
        <div className='articleCard__info'>
          <div className='articleCard__publishedDate'>{article.publishedAt}</div>
          <h3 className='articleCard__title'>{article.title}</h3>
          <p className='articleCard__summary'>{article.summary.slice(0, 100)}...</p>
        </div>

        <Link className='articleCard__link' to={`/${article.id}`}>Read more</Link>
      </div>

      <Link className='articleCard__linkOverflow' to={`/${article.id}`} />

    </div>
  );
};

export default ArticleCard;