import { type FC } from 'react';
import style from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Menu } from '../Menu/Menu';
import { HeaderType } from '../../utils/types';

export const Header: FC<HeaderType> = ({ ticker, menu }) => {
    const countryCode = ticker.substring(0, 4);
    const text = ticker.substring(4);

    return (
        <header>
            <div className={style.running_text_container}>
                <div className={style.country_flag}>
                    <Flag code={countryCode} />
                </div>
                <div className={style.running_text}>
                    <span>{text}</span>
                </div>
            </div>
            <div className={style.head}>
                <Logo fill={'var(--purple)'} />
                <Menu menu={menu} />
            </div>
        </header>
    );
};
