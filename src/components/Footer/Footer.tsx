import { type FC } from 'react';
import style from './Footer.module.css';
import { Logo } from '../Logo/Logo';

export const Footer: FC = () => {
    return (
        <footer className={style.footer}>
            <Logo />
        </footer>
    );
};
