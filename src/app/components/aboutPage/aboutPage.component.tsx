import React from 'react';

import './aboutPage.component.scss';
import rocket from '../../images/rocket.svg';
import teamMember from '../../images/teamMember.svg';

export function AboutPage() {
    return (
        <div className="about-page-items">
            <h2>About page</h2>

            <div className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>Some reasons to keep on track with spaceflights</h3>
            </div>
            <ul className="about-page-list">
                <li>
                    <a
                        href="https://www.nasa.gov/feature/facts-and-figures"
                        target="_blank"
                    >
                        There were over 140 spaceflight launches last year
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.nasa.gov/feature/facts-and-figures"
                        target="_blank"
                    >
                        There are at least 7 people on space station right now
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.nasa.gov/feature/facts-and-figures"
                        target="_blank"
                    >
                        In 24 hours, the space station is travelling through 16
                        sunrises and sunsets
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.nasa.gov/feature/facts-and-figures"
                        target="_blank"
                    >
                        The space for living and working on space station is
                        larger than a six-bedroom house
                    </a>
                </li>
            </ul>

            <div className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>We provide fresh content</h3>
            </div>
            <ul className="about-page-list">
                <li>Latest spaceflight news</li>
                <li>Detailed blogs about missions and launches</li>
                <li>Latest data from space stations and missions</li>
            </ul>

            <div className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>Our mission and core values</h3>
            </div>
            <ul className="about-page-list">
                <li>To deliver high quality product</li>
                <li>To deliver interesting content</li>
                <li>To make tracking spaceflight information easier</li>
                <li>To develop our programming skills</li>
                <li>To do what we love, to love what we do</li>
            </ul>

            <div className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>Our team</h3>
            </div>
            <ul className="about-page-list">
                <li>
                    <a href="https://github.com/magmat88" target="_blank">
                        {/* source of team member icon: https://pixabay.com/pl/vectors/u%c5%bcytkownik-osoba-ludzie-profil-1633249/ */}
                        <img alt="Team member icon" src={teamMember} />
                        Magda
                    </a>
                </li>
                <li>
                    <a href="https://github.com/earendillo" target="_blank">
                        <img alt="Team member icon" src={teamMember} />
                        Mateusz
                    </a>
                </li>
            </ul>
        </div>
    );
}
