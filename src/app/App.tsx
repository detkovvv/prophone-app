import { type FC } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import style from './App.module.css';
import { ErrorBoundary } from '../components/ErrorBoundary/ErrorBoundary';
import { Footer } from '../components/Footer/Footer';
import { Header } from '../components/Header/Header';
import { Main } from '../components/Main/Main';
import { UnknownPage } from '../components/unknownPage/UnknownPage';
import { mockData } from '../utils/mockData';
import { type DataType } from '../utils/types';

export const App: FC = () => {
    const data: DataType = mockData;
    const { header, main, footer } = data;

    return (
        <BrowserRouter basename={import.meta.env.PROD ? '/prophone-app' : undefined}>
            <ErrorBoundary>
                <div className={style.container}>
                    <Header menu={header.menu} ticker={header.ticker} />
                    <Routes>
                        <Route
                            element={
                                <Main
                                    description={main.description}
                                    infoBlock={main.infoBlock}
                                    phones={main.phones}
                                />
                            }
                            path='/'
                        />
                        <Route element={<UnknownPage />} path='/*' />
                    </Routes>
                    <Footer policies={footer.policies} />
                </div>
            </ErrorBoundary>
        </BrowserRouter>
    );
};
