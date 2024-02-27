import { type FC } from 'react';
import style from '../Footer/Footer.module.css';

export const Logo: FC = (props) => {
    return (
        <div className={style.logo}>
            <img className={style.img} src={props.logo} alt='logo' />
            <span className={style.text}>ProPhone</span>
        </div>
    );
};
