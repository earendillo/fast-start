import React from 'react';
import { compose, mount, route, withView } from 'navi';
import { Router, View } from 'react-navi';
import { StoreContext } from 'storeon/react';
import { AppStore } from './app.store';
import { AboutPage } from './components/aboutPage/aboutPage.component';
import { Articles } from './components/articles/articles.component';
import { Blogs } from './components/blogs/blogs.component';
import { Footer } from './components/footer/footer.component';
import { MainContent } from './components/mainContent/mainContent.component';
import { MainHeader } from './components/header/header.component';
import { Reports } from './components/reports/reports.component';
import './app.scss';

interface AppProps {
    store: AppStore;
}

export const routes = compose(
    withView((request) => (
        <div>
            <MainHeader appName={`Fast Start`} />
            <div className="main-container">
                <View />
            </div>
            <Footer />
        </div>
    )),
    mount({
        '/': route({
            title: '',
            getView: () => <MainContent />,
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
