import React from 'react';

import './aboutPage.component.scss';
import blog from '../../images/blog.svg';
import fact from '../../images/fact.svg';
import heart from '../../images/heart.svg';
import interesting from '../../images/interesting.svg';
import news from '../../images/news.svg';
import programmer from '../../images/programmer.svg';
import quality from '../../images/quality.svg';
import reports from '../../images/reports.svg';
import rocket from '../../images/rocket.svg';
import teamMember from '../../images/teamMember.svg';
import tracking from '../../images/tracking.svg';

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
                        <div className="icon-container">
                            <img
                                className="icon-small"
                                alt="Light bulb icon"
                                src={fact}
                            />
                        </div>
                        There were over 140 spaceflight launches last year
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.nasa.gov/feature/facts-and-figures"
                        target="_blank"
                    >
                        <div className="icon-container">
                            <img
                                className="icon-small"
                                alt="Light bulb icon"
                                src={fact}
                            />
                        </div>
                        There are at least 7 people on space station right now
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.nasa.gov/feature/facts-and-figures"
                        target="_blank"
                    >
                        <div className="icon-container">
                            <img
                                className="icon-small"
                                alt="Light bulb icon"
                                src={fact}
                            />
                        </div>
                        In 24 hours, the space station is travelling through 16
                        sunrises and sunsets
                    </a>
                </li>
                <li>
                    <a
                        href="https://www.nasa.gov/feature/facts-and-figures"
                        target="_blank"
                    >
                        <div className="icon-container">
                            <img
                                className="icon-small"
                                alt="Light bulb icon"
                                src={fact}
                            />
                        </div>
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
                <li>
                    <div className="icon-container">
                        <img
                            className="icon-small"
                            alt="Newspaper icon"
                            src={news}
                        />
                    </div>
                    Latest spaceflight news
                </li>
                <li>
                    <div className="icon-container">
                        <img
                            className="icon-small"
                            alt="Sheet of paper with fountain pen icon"
                            src={blog}
                        />
                    </div>
                    Detailed blogs about missions and launches
                </li>
                <li>
                    <div className="icon-container">
                        <img
                            className="icon-medium"
                            alt="Graph on monitor icon"
                            src={reports}
                        />
                    </div>
                    Latest data from space stations and missions
                </li>
            </ul>

            <div className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>Our mission and core values</h3>
            </div>
            <ul className="about-page-list">
                <li>
                    <div className="icon-container">
                        <img
                            className="icon-medium"
                            alt="Order of quality icon"
                            src={quality}
                        />
                    </div>
                    To deliver high quality product
                </li>
                <li>
                    <div className="icon-container">
                        <img
                            className="icon-small"
                            alt="Hand with thumb up icon"
                            src={interesting}
                        />
                    </div>
                    To deliver interesting content
                </li>
                <li>
                    <div className="icon-container">
                        <img
                            className="icon-small"
                            alt="Magnifier glass icon"
                            src={tracking}
                        />
                    </div>
                    To make tracking spaceflight information easier
                </li>
                <li>
                    <div className="icon-container">
                        <img
                            className="icon-medium-large"
                            alt="Programmer working at the computer icon"
                            src={programmer}
                        />
                    </div>
                    To develop our programming skills
                </li>
                <li>
                    <div className="icon-container">
                        <img
                            className="icon-small"
                            alt="Heart icon"
                            src={heart}
                        />
                    </div>
                    To do what we love, to love what we do
                </li>
            </ul>

            <div className="about-page-item-title">
                <img alt="White rocket that moves on hover" src={rocket} />
                <h3>Our team</h3>
            </div>
            <ul className="about-page-list">
                <li>
                    <a href="https://github.com/magmat88" target="_blank">
                        <img
                            className="icon-large"
                            alt="Team member icon"
                            src={teamMember}
                        />
                        Magda
                    </a>
                </li>
                <li>
                    <a href="https://github.com/earendillo" target="_blank">
                        <img
                            className="icon-large"
                            alt="Team member icon"
                            src={teamMember}
                        />
                        Mateusz
                    </a>
                </li>
            </ul>
        </div>
    );
}

// source of team member icon: https://pixabay.com/pl/vectors/u%c5%bcytkownik-osoba-ludzie-profil-1633249/
// source of blog icon: https://pixabay.com/pl/vectors/pisa%c4%87-list-poczta-d%c5%82ugopis-tekst-1292838/
// source of fact icon: https://pixabay.com/pl/vectors/%c5%bcar%c3%b3wka-pomys%c5%82-roz%c5%bcarzony-lampa-1294335/
// source of interesting icon: https://pixabay.com/pl/vectors/r%c4%99ka-palec-kciuk-kciuk-w-g%c3%b3r%c4%99-159474/
// source of heart icon: https://pixabay.com/pl/vectors/czarny-serce-mi%c5%82o%c5%9b%c4%87-czarna-mi%c5%82o%c5%9b%c4%87-152877/
// source of news icon: https://pixabay.com/pl/vectors/gazeta-czyta%c4%87-aktualno%c5%9bci-biznes-311272/
// source of quality icon: https://pixabay.com/pl/vectors/nagroda-medal-gwiazda-jako%c5%9b%c4%87-5572089/
// source of reports icon: https://pixabay.com/pl/vectors/p%c5%82aski-projekt-symbol-ikona-www-2126876/
// source of programmer icon: https://pixabay.com/pl/vectors/facet-programista-komputer-post%c4%99p-6070329/
// source of tracking icon: https://pixabay.com/pl/vectors/szukaj-znajdowa%c4%87-lupa-powi%c4%99kszenie-6699087/
