import React from 'react';
import Skeleton from "@mui/material/Skeleton";
import './SkeletonsHomePage.scss'
import {LIMIT} from "../../constants";

const SkeletonsHomePage = () => {
  const skeletonsList = Array.from({length: LIMIT}, (_, index) => index + 1);

  return (
    <section className='skeletons'>
      <div className='skeletons__list'>

        {skeletonsList.map((item, i) =>
          <div className='skeletons__card' key={i}>
            <Skeleton
              className='skeletons__image'
              variant="rectangular"
              width='100%'
              height={217}
            />

            <div className='skeletons__inner'>
              <Skeleton
                className='skeletons__publishedDate'
                variant="rectangular"
                width={100}
                height={21}
              />

              <Skeleton
                className='skeletons__title'
                variant="rectangular"
                width='100%'
                height={58}
              />

              <Skeleton
                className='skeletons__summary'
                variant="rectangular"
                width='100%'
                height={96}
              />

              <Skeleton
                className='skeletons__link'
                variant="rectangular"
                width={100}
                height={24}
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkeletonsHomePage;