import React from 'react';

import './footer.component.scss';

export function Footer(): JSX.Element {
    function renderAboutPage(): JSX.Element {
        return (
            <div>
                <a href={'/about-page'}>About page</a>
            </div>
        );
    }

    function renderAPIInfo(): JSX.Element {
        return (
            <p>
                This page relies on data provided by
                <a
                    href="https://api.spaceflightnewsapi.net/v3/documentation"
                    target="_blank"
                >
                    Spaceflight News API
                </a>
            </p>
        );
    }

    return (
        <div className="footer-container">
            <div className="info-container">{renderAboutPage()}</div>
            <div className="used-api-container">{renderAPIInfo()}</div>
        </div>
    );
}
