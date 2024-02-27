import { type FC } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { FallbackComponent } from '../components/FallbackComponent/FallbackComponent';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UnknownPage } from '../components/unknownPage/UnknownPage';
import { Main } from '../components/Main/Main';
import { Header } from '../components/Header/Header';
import { Footer } from '../components/Footer/Footer';
import { mockData } from '../utils/mockData';
import { Data } from '../utils/types';

export const App: FC = () => {
    const data: Data = mockData;
    return (
        <BrowserRouter>
            <ErrorBoundary
                FallbackComponent={FallbackComponent}
                onReset={() => {
                    location.reload();
                }}
            >
                <Header logo={data.logo} header={data.header} />
                <Routes>
                    <Route element={<Main />} path='/' />
                    <Route element={<UnknownPage />} path='/*' />
                </Routes>
                <Footer />
            </ErrorBoundary>
        </BrowserRouter>
    );
};
