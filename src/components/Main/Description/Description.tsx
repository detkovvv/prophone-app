import { type FC } from 'react';
import { DescriptionType } from '../../../utils/types';
import style from './Description.module.css';

export const Description: FC<{ description: DescriptionType }> = ({ description }) => {
    return (
        <section className={style.description}>
            <div className={style.title_block}>
                <h2
                    className={style.title}
                    dangerouslySetInnerHTML={{ __html: description.text }}
                />
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
