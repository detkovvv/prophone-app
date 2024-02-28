import { mockData } from './mockData';

export type DataType = typeof mockData;

export type HeaderType = DataType['header'];
export type MainType = DataType['main'];
export type FooterType = DataType['footer'];

export type MenuType = HeaderType['menu'];

export type PhonesType = MainType['phones'];
export type DescriptionType = MainType['description'];
export type InfoBlockType = MainType['infoBlock'];
