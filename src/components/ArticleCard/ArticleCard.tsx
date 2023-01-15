import React from 'react';
import {Link} from "react-router-dom";
import './ArticleCard.scss';
import {formatDate} from "../../helpers";
import {IArticle} from "../../models/IArticle";

interface IArticleCard {
  article: IArticle
}

const ArticleCard: React.FC<IArticleCard> = ({article}) => {
  return (
    <div className='articleCard'>

      <div className='articleCard__image'>
        <img src={article.imageUrl} alt='Article theme'/>
      </div>

      <div className='articleCard__inner'>
        <div className='articleCard__info'>
          <div className='articleCard__publishedDate'>
            {formatDate(article.publishedAt)}
          </div>
          <h3 className='articleCard__title' dangerouslySetInnerHTML={{__html: article.title}}/>
          <p className='articleCard__summary' dangerouslySetInnerHTML={{__html: article.summary.slice(0, 100) + '...'}}/>
        </div>

        <Link className='articleCard__link' to={`/${article.id}`}>Read more</Link>
      </div>

      <Link className='articleCard__linkOverflow' to={`/${article.id}`}/>
    </div>
  );
};

export default ArticleCard;