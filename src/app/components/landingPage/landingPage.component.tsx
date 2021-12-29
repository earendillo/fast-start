import './landingPage.component.scss';

export function LandingPage() {
    return (
        <div className="landing-page-container">
            <h1>Fast Start</h1>
            <h3>One or two welcome sentences.</h3>
            <button className="landing-btn">
                <a href="#main-content">Let's start</a>
            </button>
        </div>
    );
}
