import { type FC } from 'react';
import { PhonesType } from '../../../utils/types';
import 'swiper/swiper-bundle.css';
import style from './Slider.module.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

export const Slider: FC<{ sliderItems: PhonesType }> = ({ sliderItems }) => {
    return (
        <section className={style.slider}>
            <Swiper
                modules={[Pagination]}
                spaceBetween={0}
                slidesPerView={1}
                centeredSlides={true}
                speed={100}
                width={390}
                loop={true}
                pagination={{ clickable: true }}
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
                                        ></div>
                                        {slide.price.oldPrice}
                                    </div>
                                </div>
                                <img
                                    className={style.img}
                                    src={slide.image}
                                    alt={slide.image}
                                    loading='lazy'
                                />
                                <svg
                                    className={style.big_logo}
                                    width='420'
                                    height='540'
                                    viewBox='0 0 420 540'
                                    fill='none'
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
