import { type FC } from 'react';
import { InfoBlock } from './InfoBlock/InfoBlock';
import style from './Main.module.css';
import { Slider } from './Slider/Slider';
import { Description } from './Description/Description';
import { MainType } from '../../utils/types';

export const Main: FC<MainType> = ({ phones, description, infoBlock }) => {
    const { blocks, title } = infoBlock;
    return (
        <main className={style.main}>
            <Slider sliderItems={phones} />
            <Description description={description} />
            <InfoBlock blocks={blocks} title={title} />
        </main>
    );
};
