import React from 'react';

import './errorInfo.component.scss';

export function ErrorInfo() {
    return (
        <div className="error-item">
            <div className="error-text">
                <p>An error with loading content occured</p>
            </div>
        </div>
    );
}
