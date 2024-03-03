import { type FC } from 'react';
import { Link } from 'react-router-dom';

import style from './Logo.module.css';

type LogoProps = {
    fill: string;
};

export const Logo: FC<LogoProps> = ({ fill }) => {
    const dynamicStyle = {
        color: fill,
    };
    return (
        <Link className={style.logo} to={'/'}>
            <svg
                fill='none'
                height='25'
                viewBox='0 0 20 25'
                width='20'
                xmlns='http://www.w3.org/2000/svg'
            >
                <path
                    d='M11.3084 25H3.17347L11.3084 12.6984H19.4434L11.3084 25Z'
                    fill={`${dynamicStyle.color}`}
                />
                <path
                    d='M8.33336 0H16.6667L8.33336 12.6984H0L8.33336 0Z'
                    fill={`${dynamicStyle.color}`}
                />
            </svg>
            <div className={style.name} style={{ color: `${dynamicStyle.color}` }}>
                ProPhone
            </div>
        </Link>
    );
};
