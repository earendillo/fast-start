import React, { useEffect } from 'react';
import { StoreContext, useStoreon } from 'storeon/react';
import './app.scss';
import { AppStore } from './app.store';
import { Report } from './modules/reports/reports.state';
import { Router, View } from 'react-navi';
import { mount, route } from 'navi';

function WrappedApp() {
    const { reports, articles } = useStoreon('reports', 'articles');

    useEffect(() => {
        console.log(reports);
    }, [reports]);

    useEffect(() => {
        console.log(articles);
    }, [articles]);

    return (
        <div>
            {reports &&
                reports.reports?.map((report: Report, index: number) => (
                    <div key={`${index}_${report.newsSite}_${report.id}`}>
                        <p>{report.id}</p>
                        <p>{report.newsSite}</p>
                        <p>{report.summary}</p>
                    </div>
                ))}
        </div>
    );
}

interface AppProps {
    store: AppStore
}

const routes = mount({
    '/': route({
        title: '',
        view: <WrappedApp />
    })
})

function App({store}: AppProps) {
    return (
        <StoreContext.Provider value={store}>
            <Router routes={routes}>
                <View />
            </Router>
        </StoreContext.Provider>
    );
}

export default App;
