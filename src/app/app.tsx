import React from 'react';
import { StoreContext } from 'storeon/react';
import { AppStore } from './app.store';
import { Router, View } from 'react-navi';
import { compose, mount, route, withView } from 'navi';
import { Articles } from './components/articles/articles.component';
import { Reports } from './components/reports/reports.component';
import { MainHeader } from './components/header/header.component';
import { Main } from './components/main/main.component';
import { Blogs } from './components/blogs/blogs.component';
import { AboutPage } from './components/aboutPage/aboutPage.component';
import './app.scss';

interface AppProps {
    store: AppStore;
}

export const routes = compose(
    withView((request) => (
        <div>
            <MainHeader appName={'Product name - change me'} />
            <div className="main-container">
                <View />
            </div>
        </div>
    )),
    mount({
        '/': route({
            title: '',
            getView: () => <Main />,
        }),
        '/articles': route({
            title: '',
            getView: () => <Articles />,
        }),
        '/reports': route({
            title: '',
            getView: () => <Reports />,
        }),
        '/blogs': route({
            title: '',
            getView: () => <Blogs />,
        }),
        '/about-page': route({
            title: '',
            getView: () => <AboutPage />,
        }),
    })
);

function App({ store }: AppProps) {
    return (
        <StoreContext.Provider value={store}>
            <Router routes={routes} />
        </StoreContext.Provider>
    );
}

export default App;
