import React from 'react';

import './footer.component.scss';

export function Footer(): JSX.Element {
    function renderAboutPage(): JSX.Element {
        return (
            <div className="info-container">
                <a href={'/about-page'}>About page</a>
            </div>
        );
    }

    function renderAPIInfo(): JSX.Element {
        return (
            <div className="used-api-container">
                <p>
                    This page relies on data provided by
                    <a
                        href="https://api.spaceflightnewsapi.net/v3/documentation"
                        target="_blank"
                    >
                        Spaceflight News API
                    </a>
                </p>
            </div>
        );
    }

    return (
        <div className="footer-container">
            {renderAboutPage()}
            {renderAPIInfo()}
        </div>
    );
}
