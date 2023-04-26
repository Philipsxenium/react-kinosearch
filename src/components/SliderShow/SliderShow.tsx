import React, {useState} from 'react';
import './slidershow.scss'
import {Scrollbar, Mousewheel, Keyboard} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/scss";
import "swiper/scss/scrollbar";
import {SliderProps} from "../../@types/@types";
import MovieSlideCard from "../Cards/MovieSlideCard";



const SliderShow: React.FC<SliderProps> = ({slideCount,arrMovies}) => {

    return (
        <>
            <Swiper
                scrollbar={{
                    hide: false,
                    draggable: true,
                    horizontalClass: 'scroll-horizontal'
                }}
                slidesPerView={slideCount}
                spaceBetween={30}
                mousewheel={true}
                keyboard={true}
                modules={[Scrollbar, Mousewheel, Keyboard]}
                className="swiperTrending"
            >
                {arrMovies?.map((film) => (
                    <SwiperSlide key={film.id}>
                        <MovieSlideCard
                            id={film.id}
                            release={film.release_date}
                            rating={film.vote_average}
                            title={film.title}
                            poster={film.poster_path}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SliderShow;