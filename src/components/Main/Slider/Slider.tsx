import { type FC } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import style from './Slider.module.css';
import { type PhonesType } from '../../../utils/types';
import 'swiper/swiper-bundle.css';

export const Slider: FC<{ sliderItems: PhonesType }> = ({ sliderItems }) => {
    return (
        <section className={style.slider}>
            <Swiper
                centeredSlides={true}
                loop={true}
                modules={[Pagination]}
                pagination={{ clickable: true }}
                slidesPerView={1}
                spaceBetween={0}
                speed={100}
                width={390}
            >
                {sliderItems.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <div
                            className={style.slider_container}
                            style={{ backgroundColor: `${slide.backgroundColor}` }}
                        >
                            <div className={style.slide}>
                                <h1 className={style.title}> {slide.name}</h1>
                                <p className={style.description}>{slide.descriptions}</p>
                                <div className={style.prices}>
                                    <div
                                        className={style.new_price}
                                        style={{ color: `${slide.backgroundColor}` }}
                                    >
                                        {slide.price.newPrice}
                                    </div>
                                    <div
                                        className={style.old_price}
                                        style={{ color: `${slide.backgroundColor}` }}
                                    >
                                        <div
                                            className={style.line}
                                            style={{ backgroundColor: `${slide.backgroundColor}` }}
                                        />
                                        {slide.price.oldPrice}
                                    </div>
                                </div>
                                <img
                                    alt={slide.image}
                                    className={style.img}
                                    loading='lazy'
                                    src={slide.image}
                                />
                                <svg
                                    className={style.big_logo}
                                    fill='none'
                                    height='540'
                                    viewBox='0 0 420 540'
                                    width='420'
                                    xmlns='http://www.w3.org/2000/svg'
                                >
                                    <path
                                        d='M243.632 538.609H68.3701L243.632 273.579H418.895L243.632 538.609Z'
                                        fill={slide.fill}
                                    />
                                    <path
                                        d='M179.537 0H359.074L179.537 273.58H0L179.537 0Z'
                                        fill={slide.fill}
                                    />
                                </svg>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};
