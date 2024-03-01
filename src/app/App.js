import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackComponent } from '../components/FallbackComponent/FallbackComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UnknownPage } from '../components/unknownPage/UnknownPage';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { mockData } from '../utils/mockData';
import style from './App.module.css';
export const App = () => {
    const data = mockData;
    const { header, main, footer } = data;
    return (_jsx(BrowserRouter, { basename: import.meta.env.PROD ? '/prophone-app' : undefined, children: _jsx(ErrorBoundary, { FallbackComponent: FallbackComponent, onReset: () => {
                location.reload();
            }, children: _jsxs("div", { className: style.container, children: [_jsx(Header, { ticker: header.ticker, menu: header.menu }), _jsxs(Routes, { children: [_jsx(Route, { element: _jsx(Main, { phones: main.phones, description: main.description, infoBlock: main.infoBlock }), path: '/' }), _jsx(Route, { element: _jsx(UnknownPage, {}), path: '/*' })] }), _jsx(Footer, { policies: footer.policies, information: footer.information, buttonText: footer.buttonText, copyright: footer.copyright })] }) }) }));
};
