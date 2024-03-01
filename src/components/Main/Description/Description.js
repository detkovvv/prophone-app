import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './Description.module.css';
export const Description = ({ description }) => {
    return (_jsxs("section", { className: style.description, children: [_jsx("div", { className: style.title_block, children: _jsx("h2", { className: style.title, children: description.text }) }), _jsx("div", { className: style.image_block, children: _jsx("img", { className: style.image, src: description.image, alt: description.image, loading: 'lazy' }) })] }));
};
