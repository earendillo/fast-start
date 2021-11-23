import React from 'react';
import { StoreContext, useStoreon } from 'storeon/react';
import './app.scss';
import { AppStore } from './app.store';
import { Report } from './modules/reports/reports.state';
import { Link, Router, View } from 'react-navi';
import { compose, mount, route, withView } from 'navi';
import { Articles } from './components/articles/articles.component';
import { Reports } from './components/reports/reports.component';
import { Article } from './modules/articles/articles.state';

function WrappedApp() {
    const { reports, articles } = useStoreon('reports', 'articles');

    return (
        <div>
            <div>
                {reports &&
                    reports.reports
                        ?.slice(0, 3)
                        .map((report: Report, index: number) => (
                            <div
                                key={`${index}_${report.newsSite}_${report.id}`}
                            >
                                <p>{report.id}</p>
                                <p>{report.newsSite}</p>
                                <p>{report.summary}</p>
                            </div>
                        ))}
            </div>
            <div>
                {articles &&
                    articles.articles
                        ?.slice(0, 3)
                        .map((article: Article, index: number) => (
                            <div
                                key={`${index}_${article.newsSite}_${article.id}`}
                            >
                                <p>{article.id}</p>
                                <p>{article.newsSite}</p>
                                <p>{article.summary}</p>
                            </div>
                        ))}
            </div>
        </div>
    );
}

interface AppProps {
    store: AppStore;
}

const routes = compose(
    withView((request) => (
        <NavBar>
            <View />
        </NavBar>
    )),
    mount({
        '/': route({
            title: '',
            getView: () => <WrappedApp />,
        }),
        '/articles': route({
            title: '',
            getView: () => <Articles />,
        }),
        '/reports': route({
            title: '',
            getView: () => <Reports />,
        }),
    })
);

function NavBar(props: any) {
    return (
        <div>
            <nav className="navigation-container">
                <ul className="navigation-list">
                    <li className="navigation-list-item">
                        <Link href={'/'}>Home</Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link href={'/articles'}>Articles</Link>
                    </li>
                    <li className="navigation-list-item">
                        <Link href={'/reports'}>Reports</Link>
                    </li>
                </ul>
            </nav>
            <main>{props.children || null}</main>
        </div>
    );
}

function App({ store }: AppProps) {
    return (
        <StoreContext.Provider value={store}>
            <Router routes={routes}>
                <View />
            </Router>
        </StoreContext.Provider>
    );
}

export default App;
