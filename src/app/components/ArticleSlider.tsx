'use client'
import React from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import { PiCaretLeftBold, PiCaretRightBold } from "react-icons/pi";

import ArticleItem from "../components/ArticleItem";

import articles from '../../../public/dummy/articles.json';

interface ArticleSliderProps {
    title?: string
}

const ArticleSlider: React.FC<ArticleSliderProps> = ({ title }) => {
    return (
        <section className='article-slider'>
            <div className="container-lg">
                { title && <h2 className="h4 fw-bold mb-4">{title}</h2> }
                <div className="swiper-custom">
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={16}
                        autoplay
                        loop={true}
                        speed={1250}
                        navigation={{
                            prevEl: '.swiper-button.prev',
                            nextEl: '.swiper-button.next',
                        }}
                        modules={[Autoplay, Navigation]}
                        breakpoints={{
                            425: {
                                spaceBetween: 16,
                                slidesPerView: "auto",
                            },
                            768: {
                                spaceBetween: 24,
                                slidesPerView: "auto",
                            }
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
                    <div className="swiper-button prev">
                        <PiCaretLeftBold />
                    </div>
                    <div className="swiper-button next">
                        <PiCaretRightBold />
                    </div>
                </div>
            </div>
        </section>
    )
}
export default ArticleSlider;