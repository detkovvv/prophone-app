import { type FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackComponent } from '../components/FallbackComponent/FallbackComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UnknownPage } from '../components/unknownPage/UnknownPage';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { mockData } from '../utils/mockData';
import { DataType } from '../utils/types';
import style from './App.module.css';

export const App: FC = () => {
    const data: DataType = mockData;
    const { header, main, footer } = data;

    return (
        <BrowserRouter>
            <ErrorBoundary
                FallbackComponent={FallbackComponent}
                onReset={() => {
                    location.reload();
                }}
            >
                <div className={style.container}>
                    <Header ticker={header.ticker} menu={header.menu} />
                    <Routes>
                        <Route
                            element={
                                <Main
                                    phones={main.phones}
                                    description={main.description}
                                    infoBlock={main.infoBlock}
                                />
                            }
                            path='/'
                        />
                        <Route element={<UnknownPage />} path='/*' />
                    </Routes>
                    <Footer
                        policies={footer.policies}
                        information={footer.information}
                        buttonText={footer.buttonText}
                        copyright={footer.copyright}
                    />
                </div>
            </ErrorBoundary>
        </BrowserRouter>
    );
};
