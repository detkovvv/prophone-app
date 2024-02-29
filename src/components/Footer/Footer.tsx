import { type FC } from 'react';
import style from './Footer.module.css';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { FooterType } from '../../utils/types';

export const Footer: FC<FooterType> = ({ policies, information, buttonText, copyright }) => {
    return (
        <footer className={style.footer}>
            <Logo fill={'var(--white)'} />
            <div className={style.policies}>
                <ul className={style.policies_list}>
                    {policies.map((policy) => (
                        <li key={policy.id}>
                            <Link to='#'>
                                <h3 className={style.item_link}>{policy.name}</h3>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <div className={style.information}>
                <p className={style.information_text}>{information}</p>
            </div>
            <div className={style.button_container}>
                <button className={style.button}>{buttonText}</button>
            </div>
            <div className={style.copyright}>{copyright}</div>
        </footer>
    );
};
