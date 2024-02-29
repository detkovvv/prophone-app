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
                    style={{ backgroundColor: `${slide.fill}` }}
                >
                    <div className={style.slide}>
                        <h1 className={style.title}> {slide.name}</h1>
                        <p className={style.description}>{slide.descriptions}</p>
                        <div className={style.prices}>
                            <div className={style.new_price}>{slide.price.newPrice}</div>
                            <div className={style.old_price}>{slide.price.oldPrice}</div>
                        </div>
                        <img
                            className={style.img}
                            src={slide.image}
                            alt={slide.image}
                            loading='lazy'
                        />
                    </div>
                </div>
            ))}
        </div>
    );
};
