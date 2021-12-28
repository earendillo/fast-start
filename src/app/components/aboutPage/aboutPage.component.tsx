import './aboutPage.component.scss';
import rocket from '../../images/rocket.svg';

export function AboutPage() {
    return (
        <div className="about-page-items">
            <h2>About page</h2>

            <div className="about-page-content">
                <div className="about-page-header">
                    <img alt="rocket" src={rocket} />
                    <h3>Some facts</h3>
                </div>
                <div className="about-page-container">
                    <ul>
                        <li>There are over 140 spaceflight launches in 2021</li>
                        <li>
                            There are at least 7 people on space station right
                            now
                        </li>
                        <li>
                            In 24 hours, the space station is travelling through
                            16 sunrises and sunsets
                        </li>
                        <li>
                            The space for living and working on space station is
                            larger than a six-bedroom house
                        </li>
                    </ul>
                    <p>
                        <em>
                            Source:
                            <br />
                            <a
                                href="https://www.nasa.gov/feature/facts-and-figures"
                                target="_blank"
                            >
                                International Space Station Facts and Figures
                            </a>
                        </em>
                    </p>
                </div>
            </div>

            <div className="about-page-content">
                <div className="about-page-header">
                    <img alt="rocket" src={rocket} />
                    <h3>We provide fresh content</h3>
                </div>
                <div className="about-page-container">
                    <ul>
                        <li>Latest spaceflight news</li>
                        <li>Detailed blogs about missions and launches</li>
                        <li>Latest data from space stations and missions</li>
                    </ul>
                </div>
            </div>

            <div className="about-page-content">
                <div className="about-page-header">
                    <img alt="rocket" src={rocket} />
                    <h3>Our mission and core values</h3>
                </div>
                <div className="about-page-container">
                    <ul>
                        <li>To deliver high quality product</li>
                        <li>To deliver interesting content</li>
                        <li>To make tracking spaceflight information easier</li>
                        <li>To develop our programming skills</li>
                        <li>To do what we love, to love what we do</li>
                    </ul>
                </div>
            </div>

            <div className="about-page-content">
                <div className="about-page-header">
                    <img alt="rocket" src={rocket} />
                    <h3>Our team</h3>
                </div>
                <div className="about-page-container">
                    <ul>
                        <li>
                            <a
                                href="https://github.com/magmat88"
                                target="_blank"
                            >
                                Magda
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/earendillo"
                                target="_blank"
                            >
                                Mateusz
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
