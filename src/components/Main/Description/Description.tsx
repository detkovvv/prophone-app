import { type FC } from 'react';

import style from './Description.module.css';
import { type DescriptionType } from '../../../utils/types';

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
                    alt={description.image}
                    className={style.image}
                    loading='lazy'
                    src={description.image}
                />
            </div>
        </section>
    );
};
