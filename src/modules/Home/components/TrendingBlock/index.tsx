import React, {useState} from 'react';
import {MovieSlideCard, SkeletonSliderShow, SliderShow, Switcher, Title} from "../../../../components";
import {SwiperSlide} from "swiper/react";
import {useGetTrendingMoviesQuery} from "../../../../Store/tmdbService/endpoints";
import {typeQueryTrendingFilms} from "../../mock/statick";

export const TrendingBlock = () => {
    const [switcherTrendingFilms, setSwitcherTrendingFilms] = useState(0)

    const {
        data: trendDataList,
        isLoading: isLoadingTrend
    } = useGetTrendingMoviesQuery(typeQueryTrendingFilms[switcherTrendingFilms]);

    return (
        <div className='frameworks-container'>
            <Title>Trending</Title>
            <Switcher
                switcher={switcherTrendingFilms}
                setSwitcher={setSwitcherTrendingFilms}
                title1={'Today'}
                title2={'This week'}
                color={'#ffffff'}
            />
            <SliderShow slideCount={4}>
                {trendDataList?.results
                    .map((film) => (
                        <SwiperSlide key={film.id}>
                            {isLoadingTrend
                                ? <SkeletonSliderShow/>
                                : <MovieSlideCard
                                    id={film.id}
                                    release={film.release_date}
                                    rating={film.vote_average}
                                    title={film.title}
                                    poster={film.poster_path}
                                />
                            }
                        </SwiperSlide>
                    ))
                }
            </SliderShow>
        </div>
    );
};