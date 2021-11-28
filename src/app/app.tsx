import React from 'react';
import { StoreContext, useStoreon } from 'storeon/react';
import { AppStore } from './app.store';
import { Link, Router, View } from 'react-navi';
import { compose, mount, route, withView } from 'navi';
import { Articles } from './components/articles/articles.component';
import { Reports } from './components/reports/reports.component';
import { HeaderComponent } from './components/header/header.component';
import { Article } from './modules/articles/articles.state';
import { Report } from './modules/reports/reports.state';
import './app.scss';

function WrappedApp(): JSX.Element {
    const { reports, articles } = useStoreon('reports', 'articles');

    return (
        <div>
            <div
                className="reports-container">
                {reports &&
                    reports.reports
                        ?.slice(0, 3)
                        .map((report: Report, index: number) => (
                            <div
                                className="report-item"
                                key={`${index}_${report.newsSite}_${report.id}`}
                            >
                                <div
                                    className="report-item-id"
                                >
                                    <p>{report.id}</p>
                                </div>
                                <div
                                    className="report-item-898+65"
                                >
                                    <p>{report.newsSite}</p>
                                </div>
                                <div
                                    className="report-item-summary"
                                >
                                    <p>{report.summary}</p>
                                </div>
                            </div>
                        ))}
            </div>
            <div
                className="articles-container"
            >
                {articles &&
                    articles.articles
                        ?.slice(0, 3)
                        .map((article: Article, index: number) => (
                            <div
                                
                                className="article-item"
                                key={`${index}_${article.newsSite}_${article.id}`}
                            >
                                <div
                                    className="article-item-id"
                                >
                                    <p>{article.id}</p>
                                </div>
                                <div
                                    className="article-item-title"
                                >
                                    <p>{article.newsSite}</p>
                                </div>
                                <div
                                    className="article-item-summary"
                                >
                                    <p>{article.summary}</p>
                                </div>
                            </div>
                        ))}
            </div>
        </div>
    );
}

interface AppProps {
    store: AppStore;
}

export const routes = compose(
    withView((request) => (
        <div>
            <HeaderComponent />
            <div
                className="main-container"
                
            >
                <View />
            </div>
        </div>
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

export function NavBar(props: any) {
    return (
        <div className='navbar-container'>
            <nav
                className="navigation-container"
            >
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
                    <li className="navigation-list-item">
                        <Link href={'/#'}>Blogs</Link>
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
                <Router routes={routes} />
        </StoreContext.Provider>
    );
}

export default App;
