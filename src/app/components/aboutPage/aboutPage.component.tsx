import './aboutPage.component.scss';
import rocket from '../../images/rocket.svg';

export function AboutPage() {
    return (
        <div className="about-page-container">
            <h2>About page</h2>

            <div className="about-page-section">
                <div className="about-page-content">
                    <div className="about-page-text">
                        <div className="about-page-header">
                            <img alt="section pic" src={rocket} />
                            <h3>Some facts</h3>
                        </div>
                        <ul>
                            <li>There are over 140 spaceflight launches in 2021.</li>
                            <li>There are at least 7 people on space station right now.</li>
                            <li>In 24 hours, the space station is travelling through 16 sunrises and sunsets.</li>
                            <li>The space for living and working on space station is larger than a six-bedroom house.</li>
                        </ul>
                        <p><em>Source: <a href="https://www.nasa.gov/feature/facts-and-figures" target="_blank">International Space Station Facts and Figures</a></em></p>
                    </div>
                </div>
            </div>

            <div className="about-page-section">
                <div className="about-page-content">
                    <div className="about-page-text">
                        <div className="about-page-header">
                            <img alt="section pic" src={rocket} />
                            <h3>We provide fresh content</h3>
                        </div>
                        <ul>
                            <li>Latest spaceflight news</li>
                            <li>Detailed blogs about missions and launches</li>
                            <li>Latest data from space stations and missions</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="about-page-section">
                <div className="about-page-content">
                    <div className="about-page-text">
                        <div className="about-page-header">
                            <img alt="section pic" src={rocket} />
                            <h3>Our mission and core values</h3>
                        </div>
                        <p>Section content - to change</p>
                    </div>
                </div>
            </div>

            <div className="about-page-section">
                <div className="about-page-content">
                    <div className="about-page-text">
                        <div className="about-page-header">
                            <img alt="section pic" src={rocket} />
                            <h3>Our team</h3>
                        </div>
                        <p>Section content - to change</p>
                    </div>
                </div>
            </div>


        </div>
    );
}
