import { type FC } from 'react';
import { MainType } from '../../utils/types';
import { InfoBlock } from './InfoBlock/InfoBlock';
import style from './Main.module.css';
import { Slider } from './Slider/Slider';
import { Description } from './Description/Description';

export const Main: FC<MainType> = ({ phones, description, infoBlock }) => {
    const { blocks, title } = infoBlock;
    const { text, image } = description;

    return (
        <main className={style.main}>
            <Slider phones={[...phones]} />
            <Description text={text} src={image} />
            <InfoBlock blocks={blocks} title={title} />
        </main>
    );
};
