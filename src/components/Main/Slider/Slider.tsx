import { type FC } from 'react';
import { PhonesType } from '../../../utils/types';

type SliderType = {
    id: string;
    name: string;
    descriptions: string;
    price: { oldPrice: string; newPrice: string };
    backgroundColor: string;
    backgroundImage: string;
    fill: string;
    image: string;
};
export const Slider: FC<SliderType> = (sliderItems) => {
    console.log(sliderItems);
    return <div></div>;
};
