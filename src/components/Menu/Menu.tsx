import { type FC } from 'react';
import { MenuType } from '../../utils/types';

export const Menu: FC<{ menu: MenuType }> = ({ menu }) => {
    console.log(menu);
    return <div>menu</div>;
};
