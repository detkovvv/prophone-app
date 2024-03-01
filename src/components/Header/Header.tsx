import { type FC, useState } from 'react';
import style from './Header.module.css';
import { Logo } from '../Logo/Logo';
import { Menu } from './Menu/Menu';
import { HeaderType } from '../../utils/types';

export const Header: FC<HeaderType> = ({ ticker, menu }) => {
    const unicode = ticker.substring(0, 2).toLowerCase();
    const text = ticker.substring(3).toUpperCase();
    const [fill, setFill] = useState('var(--white)');
    const [visible, setVisible] = useState(false);
    const [opened, setOpened] = useState(false);

    const handleToggleMenu = () => {
        setOpened(!opened);
        setVisible(!visible);
        fill === 'var(--purple)' ? setFill('var(--white)') : setFill('var(--purple)');
    };

    return (
        <header
            className={style.header}
            style={{ backgroundColor: `${opened ? 'white' : 'transparent'}` }}
        >
            <div className={style.running_text_container}>
                <div className={style.running_text}>
                    <div className={style.country_flag}>
                        <img
                            src={`https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.4.3/flags/4x3/${unicode}.svg`}
                            alt={unicode}
                            loading='lazy'
                        />
                    </div>
                    <span className={style.text}>{text}</span>
                </div>
            </div>
            <div className={style.head}>
                <Logo fill={fill} />
                <button className={style.menu_button} onClick={handleToggleMenu}>
                    {opened ? (
                        <svg
                            width='11'
                            height='12'
                            viewBox='0 0 11 12'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <rect
                                x='1.22162'
                                y='0.75'
                                width='13.8287'
                                height='1.72859'
                                transform='rotate(45 1.22162 0.75)'
                                fill='#0021A1'
                            />
                            <rect
                                x='10.999'
                                y='1.97192'
                                width='13.8287'
                                height='1.72859'
                                transform='rotate(135 10.999 1.97192)'
                                fill='#0021A1'
                            />
                        </svg>
                    ) : (
                        <svg
                            className={style.menu_icon}
                            width='20'
                            height='20'
                            viewBox='0 0 20 20'
                            fill='none'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                d='M2.2148 15.5525C2.88601 15.5525 3.42705 16.1007 3.42705 16.775C3.42705 17.4518 2.88345 17.9974 2.2148 18C1.5436 18 1.00255 17.4518 1 16.775C1 16.0981 1.5436 15.5525 2.2148 15.5525ZM18.1604 15.9025C18.6248 15.9025 19 16.2808 19 16.7492C19 17.1816 18.6784 17.5368 18.265 17.5882L18.1604 17.5959H6.67078C6.20629 17.5959 5.83113 17.2176 5.82858 16.7492C5.82858 16.3169 6.15015 15.9617 6.56359 15.9077L6.67078 15.9025H18.1604ZM2.2148 8.77626C2.88601 8.77626 3.42705 9.32443 3.42705 9.99871C3.42705 10.6756 2.88345 11.2212 2.2148 11.2237C1.5436 11.2237 1.00255 10.6756 1 9.99871C1 9.32186 1.5436 8.77626 2.2148 8.77626ZM18.1604 9.12369C18.6248 9.12369 19 9.50201 19 9.97298C19 10.4053 18.6784 10.7605 18.265 10.812L18.1604 10.8197H6.67078C6.20629 10.8197 5.83113 10.4414 5.82858 9.97298C5.82858 9.54061 6.15015 9.18546 6.56359 9.13141L6.67078 9.12369H18.1604ZM2.2148 2C2.88601 2 3.42705 2.54817 3.42705 3.22245C3.42705 3.89931 2.88345 4.44491 2.2148 4.44491C1.5436 4.44491 1.00255 3.89673 1 3.22245C1 2.5456 1.5436 2 2.2148 2ZM18.1604 2.34743C18.6248 2.34743 19 2.72575 19 3.19414C19 3.62651 18.6784 3.98166 18.265 4.03571L18.1604 4.04343H6.67078C6.20629 4.04343 5.83113 3.66511 5.82858 3.19414C5.82858 2.76178 6.15015 2.40663 6.56359 2.35515L6.67078 2.34743H18.1604Z'
                                fill={fill}
                            />
                        </svg>
                    )}
                </button>
            </div>
            <Menu menu={menu} visible={visible} />
        </header>
    );
};
