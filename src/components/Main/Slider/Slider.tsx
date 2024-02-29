import { type FC } from 'react';
import { PhonesType } from '../../../utils/types';
import style from './Slider.module.css';

export const Slider: FC<{ sliderItems: PhonesType }> = ({ sliderItems }) => {
    return (
        <div className={style.slider}>
            {sliderItems.map((slide) => (
                <div
                    className={style.slider_container}
                    key={slide.id}
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
                            width='418.89'
                            height='538.61'
                            viewBox='0 0 418.89 538.61'
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
            ))}
        </div>
    );
};
