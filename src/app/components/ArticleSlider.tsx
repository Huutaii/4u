'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import ArticleItem from "../components/ArticleItem";

import articles from '../../../public/dummy/articles.json';

interface ArticleSliderProps {
    title?: string
}

const ArticleSlider: React.FC<ArticleSliderProps> = ({ title }) => {
    return (
        <section className='article-slider'>
            <div className="container-lg">
                { title && <h2 className="h3 fw-semibold mb-4">{title}</h2> }
                <Swiper
                    slidesPerView={1}
                    spaceBetween={24}
                    autoplay
                    loop={true}
                    speed={1250}
                    modules={[Autoplay]}
                    breakpoints={{
                        576: {
                          slidesPerView: "auto",
                        },
                    }}
                    className="swiper-article"
                >
                    { articles
                    .filter(item => item.isFeatured === true)
                    .map((item, index) => (
                        <SwiperSlide key={index}>
                            <ArticleItem 
                                id={item.id}
                                title={item.title}
                                intro={item.intro}
                                thumbnail={item.thumbnail}
                                author={item.author}
                                publishAt={item.publishAt}
                                tag={item.tag}
                                isCard
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}
export default ArticleSlider;