import { type FC } from 'react';
import { DescriptionType, PhonesType } from '../../../utils/types';

type MainContentType = {
    phones: PhonesType;
    descriptions: DescriptionType;
};
export const MainContent: FC<MainContentType> = ({ phones, descriptions }) => {
    return <div></div>;
};
