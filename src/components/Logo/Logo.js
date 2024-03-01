import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './Logo.module.css';
import { Link } from 'react-router-dom';
export const Logo = ({ fill }) => {
    const dynamicStyle = {
        color: fill,
    };
    return (_jsxs(Link, { className: style.logo, to: '/', children: [_jsxs("svg", { width: '20', height: '25', viewBox: '0 0 20 25', fill: 'none', xmlns: 'http://www.w3.org/2000/svg', children: [_jsx("path", { d: 'M11.3084 25H3.17347L11.3084 12.6984H19.4434L11.3084 25Z', fill: `${dynamicStyle.color}` }), _jsx("path", { d: 'M8.33336 0H16.6667L8.33336 12.6984H0L8.33336 0Z', fill: `${dynamicStyle.color}` })] }), _jsx("div", { className: style.name, style: { color: `${dynamicStyle.color}` }, children: "ProPhone" })] }));
};
