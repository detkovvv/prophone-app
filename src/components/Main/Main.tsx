import { type FC } from 'react';
import { MainType } from '../../utils/types';
import { InfoBlock } from './InfoBlock/InfoBlock';
import { MainContent } from './MainContent/MainContent';
import style from './Main.module.css';

export const Main: FC<MainType> = ({ phones, description, infoBlock }) => {
    const { blocks, title } = infoBlock;
    return (
        <main className={style.main}>
            <MainContent phones={phones} description={description} />
            <InfoBlock blocks={blocks} title={title} />
        </main>
    );
};
