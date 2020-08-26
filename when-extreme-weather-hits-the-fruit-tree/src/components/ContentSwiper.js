import React from 'react';
import './ContentSwiper.sass';

import content from '../constant/content'

import SwiperCore, { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/swiper.scss'
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Pagination]);

function ContentSwiper() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
    >
      <h3>{content.article.slide.title}</h3>
      <p className="reference">{content.article.slide.reference}</p>
      <SwiperSlide>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={require('../images/chart-2-1-md.png')}
            type="image/png"
          />
          <img src={require('../images/chart-2-1-sm.png')} alt={content.article.slide.chart_1}/>
          <figcaption>{content.article.slide.chart_1}</figcaption>
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={require('../images/chart-2-2-md.png')}
            type="image/png"
          />
          <img src={require('../images/chart-2-2-sm.png')} alt={content.article.slide.chart_2}/>
          <figcaption>{content.article.slide.chart_2}</figcaption>
        </picture>
      </SwiperSlide>
      <SwiperSlide>
        <picture>
          <source
            media="(min-width:768px)"
            srcSet={require('../images/chart-2-3-md.png')}
            type="image/png"
          />
          <img src={require('../images/chart-2-3-sm.png')} alt={content.article.slide.chart_3}/>
          <figcaption>{content.article.slide.chart_3}</figcaption>
        </picture>
      </SwiperSlide>
    </Swiper>
  )
}

export default ContentSwiper;