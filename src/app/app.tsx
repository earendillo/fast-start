import React, { useEffect, useState } from 'react';
import { StoreContext, useStoreon } from 'storeon/react';
import './app.scss';
import { createStore } from './app.store';
import { Report } from './modules/reports/reports.state';

function WrappedApp() {
    const { reports, articles } = useStoreon('reports', 'articles');

    useEffect(() => {
        console.log(reports, articles);
    }, [reports, articles]);

    const [title, setTitle] = useState<string>('OZZY');

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
            <button onClick={() => setTitle(`OZZY`)}>OZZY</button>
            <button onClick={() => setTitle(`LEMMY`)}>LEMMY</button>
            <button onClick={() => setTitle(`ZAKK`)}>ZAKK</button>
            {title}
            <TheList title={title} />
        </div>
    );
}

interface TheListProps {
    title: string;
}

function TheList({ title }: TheListProps) {
    return (
        <div>
            <h2>challenge</h2>
            <p>title: {title}</p>
            <ul>
                <li className={title === 'OZZY' ? 'active' : ''}>OZZY</li>
                <li className={title === 'LEMMY' ? 'active' : ''}>LEMMY</li>
                <li className={title === 'ZAKK' ? 'active' : ''}>ZAKK</li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>
    );
}

function App() {
    const store = createStore();

    return (
        <StoreContext.Provider value={store}>
            <WrappedApp />
        </StoreContext.Provider>
    );
}

export default App;
