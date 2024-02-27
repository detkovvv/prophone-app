import { type FC } from 'react';
import { NavLink } from 'react-router-dom';
import style from './unknownPage.module.css';

export const UnknownPage: FC = () => {
    return (
        <div className={style.unknown_container}>
            <h1>Page not found</h1>
            <NavLink className={style.unknown_container_button} to='/'>
                BACK
            </NavLink>
        </div>
    );
};
