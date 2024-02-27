import { mockData } from './mockData';

export type DataType = typeof mockData;

export type HeaderType = DataType['header'];
export type MainType = DataType['main'];
export type FooterType = DataType['footer'];
