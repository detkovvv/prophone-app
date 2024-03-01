import { type FC } from 'react';
import { DescriptionType } from '../../../utils/types';
import style from './Description.module.css';

export const Description: FC<{ description: DescriptionType }> = ({ description }) => {
    const purpleText = description.text.split(' ').slice(3).join(' ');
    const blackText = description.text.split(' ').slice(0, 3).join(' ');

    console.log(purpleText);
    console.log(blackText);

    return (
        <section className={style.description}>
            <div className={style.title_block}>
                <h2 className={style.title}>{description.text}</h2>
            </div>
            <div className={style.image_block}>
                <img
                    className={style.image}
                    src={description.image}
                    alt={description.image}
                    loading='lazy'
                />
            </div>
        </section>
    );
};
