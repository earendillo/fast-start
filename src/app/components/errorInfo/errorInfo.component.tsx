import React from 'react';
import errorIcon from '../../images/errorIcon.svg';
import './errorInfo.component.scss';

export function ErrorInfo() {
    return (
        <div className="error-item">
            <img
                className="error-icon"
                alt="Triangle with an exclamation mark"
                src={errorIcon}
            />
            <div className="error-text">
                <p>An error with loading content occured</p>
            </div>
        </div>
    );
}

//source of error icon: https://pixabay.com/pl/vectors/wykrzyknik-ostrze%c5%bcenie-98739/
