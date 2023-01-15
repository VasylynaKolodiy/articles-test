import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import './SkeletonsArticlePage.scss'

const SkeletonsHomePage = () => (
  <section className='skeletonsArticlePage'>
    <Skeleton
      className='skeletonsArticlePage__image'
      variant="rectangular"
      width='100%'
      height={245}
    />

    <div className='articlePage__content'>
      <Skeleton
        className='skeletonsArticlePage__title'
        variant="rectangular"
        width='80%'
        height={29}
      />

      <Skeleton
        className='skeletonsArticlePage__summary'
        variant="rectangular"
        width='100%'
        height={250}
      />
    </div>

    <Skeleton
      className='skeletonsArticlePage__link'
      variant="rectangular"
      width={100}
      height={21}
    />
  </section>
);

export default SkeletonsHomePage;