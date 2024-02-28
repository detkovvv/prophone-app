import { type FC } from 'react';
import style from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { HeaderType } from '../../utils/types';

export const Header: FC<HeaderType> = ({ ticker, menu }) => {
    return (
        <header>
            <div className={style.head_offer}>
                <span className={style.text}>{ticker}</span>
            </div>
            <div className={style.head}>
                <Logo fill={'var(--purple)'} />
                <Menu menu={menu} />
            </div>
        </header>
    );
};
