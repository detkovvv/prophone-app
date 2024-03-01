import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './FallbackComponent.module.css';
export const FallbackComponent = ({ error, resetErrorBoundary, }) => {
    return (_jsxs("div", { className: style.fallback, role: 'alert', children: [_jsx("p", { children: "\u0427\u0442\u043E-\u0442\u043E \u043F\u043E\u0448\u043B\u043E \u043D\u0435 \u0442\u0430\u043A:" }), _jsx("pre", { children: error.message }), _jsx("button", { onClick: resetErrorBoundary, children: "\u041F\u043E\u043F\u0440\u043E\u0431\u0443\u0439\u0442\u0435 \u0441\u043D\u043E\u0432\u0430" })] }));
};
