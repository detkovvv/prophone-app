import { type FC } from 'react';
import style from './Logo.module.css';
import { Link } from 'react-router-dom';

export const Logo: FC = ({ src }) => {
    return (
        <Link className={style.logo}>
            <img className={style.img} src={src} alt='logo' />
            <span className={style.name}>ProPhone</span>
        </Link>
    );
};
