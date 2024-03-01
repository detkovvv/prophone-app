import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { InfoBlock } from './InfoBlock/InfoBlock';
import style from './Main.module.css';
import { Slider } from './Slider/Slider';
import { Description } from './Description/Description';
export const Main = ({ phones, description, infoBlock }) => {
    const { blocks, title } = infoBlock;
    return (_jsxs("main", { className: style.main, children: [_jsx(Slider, { sliderItems: phones }), _jsx(Description, { description: description }), _jsx(InfoBlock, { blocks: blocks, title: title })] }));
};
