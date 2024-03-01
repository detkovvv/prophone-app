import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { NavLink } from 'react-router-dom';
import style from './unknownPage.module.css';
export const UnknownPage = () => {
    return (_jsxs("div", { className: style.unknown_container, children: [_jsx("h1", { children: "Page not found" }), _jsx(NavLink, { className: style.unknown_container_button, to: '/', children: "BACK" })] }));
};
