import { type FC } from 'react';
import { DescriptionType } from '../../../utils/types';
import style from './Description.module.css';

export const Description: FC<DescriptionType> = ({ text, src }) => {
    return (
        <div className={style.description}>
            <div className={style.title_block}>
                <h2 className={style.title}>{text}</h2>
            </div>
            <div className={style.image_block}>
                <img className={style.image} src={src} alt={src} loading='lazy' />
            </div>
        </div>
    );
};
