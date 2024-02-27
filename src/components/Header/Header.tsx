import { type FC } from 'react';
import style from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';

export const Header: FC = ({ logo, header }) => {
    return (
        <header>
            <div className={style.head_offer}>
                <span className={style.text}>{header.ticker}</span>
            </div>
            <div className={style.head}>
                <Logo src={logo} />
                <Menu />
            </div>
        </header>
    );
};
