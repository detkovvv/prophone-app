import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './Footer.module.css';
import { Logo } from '../Logo/Logo';
import { Link } from 'react-router-dom';
export const Footer = ({ policies, information, buttonText, copyright }) => {
    return (_jsxs("footer", { className: style.footer, children: [_jsx(Logo, { fill: 'var(--white)' }), _jsx("div", { children: _jsx("ul", { className: style.policies_list, children: policies.map((policy) => (_jsx("li", { children: _jsx(Link, { to: '#', children: _jsx("h3", { className: style.item_link, children: policy.name }) }) }, policy.id))) }) }), _jsx("div", { children: _jsx("p", { className: style.information_text, children: information }) }), _jsx("div", { className: style.button_container, children: _jsx("button", { className: style.button, children: buttonText }) }), _jsx("div", { className: style.copyright, children: copyright })] }));
};
